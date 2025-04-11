// API calling function


export const fetchData = async (
  query = "",
  { variables }: { variables: Record<string, any> },
) => {
 const token = process.env.AUTH_TOKEN
  const headers = { 
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${token}`
   };
 
  try {
    const response = await fetch(`https://cms.verticalclick.us/graphql`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    console.log("response is : ", response)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

// get all the post
export const getAllPosts = async (
  preview?: boolean,
  after?: string | undefined,
) => {
  const data = await fetchData(
    `query AllPosts($after: String) {
		  posts(first: 12, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
			pageInfo {
			  hasNextPage
			  endCursor
			}
			edges {
			  node {
				title
				excerpt
				slug
				date
				featuredImage {
				  node {
					sourceUrl(size:MEDIUM )
				  }
				}
				author {
				  node {
					name
					firstName
					lastName
					avatar {
					  url
					}
				  }
				}
			  }
			}
		  }
		}
	  `,
    {
      variables: {
        after,
        onlyEnabled: !preview,
        preview,
      },
    },
  );

  return data?.data?.posts;
};

export async function getPostBySlug(
  slug?: string,
  preview?: boolean,
  previewData?: any,
) {
  const postPreview = preview && previewData?.post;

  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));

  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;

  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";

  const data = await fetchData(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
		postId
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
			categoryId
			count
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
	  comments(first: 100) {
		nodes {
		  id
		  content
		  parentId
		  date
		  author{
			node{
				name
				avatar{
					url
				}
			}
		  }
		}
	  }
	  seo {
		canonical
		metaDesc
		metaKeywords
		opengraphDescription
		opengraphImage {
			sourceUrl
			srcSet
			altText
		}
		opengraphUrl
      	opengraphType
		}
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    },
  );

  console.log("topdata" , data)

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  // data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // // If there are still 3 posts, remove the last one
  // if (data.posts.edges.length > 2) data.posts.edges.pop()
  console.log("data is : ", data.data)
  return data.data;
}
