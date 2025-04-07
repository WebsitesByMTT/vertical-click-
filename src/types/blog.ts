

export interface getPostBySlugParams {
    slug : string | number,
    preview : boolean,
    previewData?: {post : {id : number , slug : string , status : string}}
}

export interface GetPostBySlugParams {
    slug: string | number;
    preview: boolean;
    previewData?: {
      post: {
        id: number;
        slug: string;
        status: string;
      };
    };
  }
  
 export interface Author {
    name: string;
    firstName?: string;
    lastName?: string;
    avatar?: {
      url: string;
    };
  }
  
 export interface Category {
    categoryId: number;
    count: number;
    name: string;
  }
  
 export interface Tag {
    name: string;
  }
  
 export interface Comment {
    id: string;
    content: string;
    parentId?: string;
    date: string;
    author?: {
      node: {
        name: string;
        avatar?: {
          url: string;
        };
      };
    };
  }
  
 export interface SEO {
    canonical?: string;
    metaDesc?: string;
    metaKeywords?: string;
    opengraphDescription?: string;
    opengraphImage?: {
      sourceUrl: string;
      srcSet?: string;
      altText?: string;
    };
    opengraphUrl?: string;
    opengraphType?: string;
  }
  
 export interface PostData {
    postId: number;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
      };
    };
    author?: {
      node: Author;
    };
    categories?: {
      edges: {
        node: Category;
      }[];
    };
    tags?: {
      edges: {
        node: Tag;
      }[];
    };
    comments?: {
      nodes: Comment[];
    };
    seo?: SEO;
    revisions?: {
      edges: {
        node: {
          title: string;
          excerpt: string;
          content: string;
          author: {
            node: Author;
          };
        };
      }[];
    };
    content: string;
  }
  
 export interface GetPostBySlugResponse {
    post: PostData;
  }
  

  // ---------- Get GetPreviewPost

 export interface GetPreviewPostParams {

  }

// ------------ getAllPostsWithSlug

 export interface getAllPostsWithSlug {

  }

// ----------- getAllCategoriesWithSlug

export interface getAllCategoriesWithSlug{

 }

// ----------- getPostsByCategoryId

export interface getPostsByCategoryId {

}

// ---------- getMorePosts

export interface getMorePosts{

}

// --------  commentOnPost

export interface commentOnPost {

}

// -------- getAllCategoriesForHome

export interface getAllCategoriesForHome {

}

// -------  getCategoriesForSidebar

export interface getCategoriesForSidebar{

}

// ------- getCategoryBySlug
 
export interface getCategoryBySlug {

}

// ---------- getPostsByCategoryName

export interface getPostsByCategoryName {

}

// ----------  getRecentPosts

export interface getRecentPosts {

}

// ----------- getCategories

export interface getCategories {

}

// ---------- getAllPosts

export interface getAllPosts {
    
}