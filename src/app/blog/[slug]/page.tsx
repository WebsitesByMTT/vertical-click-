import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { getPostBySlug } from "@/lib/data";
import Divider from "@/components/Divider";

async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { post } = await getPostBySlug(slug, false, []);

  return (
    <main>
      <Header />
      <Container>
        <article className="mx-auto my-10 w-full lg:w-[90%] rounded-lg  px-4 py-10  sm:px-8 sm:py-16 md:px-16 md:py-20">
          <h1 className="mb-6 pb-8 text-center text-4xl font-semibold text-black sm:text-5xl md:text-6xl">
            {post?.title}
          </h1>
          <img
            src={post?.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
            alt={post?.imageAlt}
            className="mx-auto mb-10 h-auto w-full rounded-lg shadow-md md:mb-14"
          />
          <div
            className="blog-content prose prose-lg flex max-w-none flex-col gap-4 text-gray-700"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          />
        </article>
        <Divider/>
      </Container>
      <Footer />
    </main>
  );
}

export default BlogPost;
