import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { getAllPosts } from "@/lib/data";
import React from "react";
import Link from "next/link";

const BlogsPage = async () => {
  const posts = await getAllPosts();
  // console.log("posts", posts);

  return (
    <main>
      <Header />
      <Container>
        <h1 className="my-8 text-center text-5xl font-bold uppercase">Blogs</h1>
        <div className="my-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts?.edges?.map((post: any, index: number) => (
            <Link key={index} href={`/blog/${post?.node?.slug}`}>
              <div>
                <img
                  src={post?.node?.featuredImage?.node?.sourceUrl}
                  alt={post?.node?.title}
                  className="w-full object-cover"
                />
                <div className="">
                  <div className="mt-2 text-xl font-semibold text-black">
                    {post?.node?.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default BlogsPage;
