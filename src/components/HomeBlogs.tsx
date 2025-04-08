import { getAllPosts } from "@/lib/data";
import Link from "next/link";
import React from "react";

const HomeBlogs = async () => {
  const posts = await getAllPosts();
  return (
    <section>
      <div className="max-full mx-auto">
        <h2 className="mb-8 text-center text-5xl font-bold md:mb-16 md:text-6xl">
          BLOGS
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts?.edges?.slice(0, 6).map((post: any, index: number) => (
            <Link key={index} href={`/blog/${post?.node?.slug}`}>
              <img
                key={index}
                src={post?.node?.featuredImage?.node?.sourceUrl}
                alt={post?.node?.title}
                className="h-[300px] w-full rounded-3xl object-cover"
              />
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#F05186] to-[#8F5BFE] px-6 py-3 text-lg font-medium text-white uppercase transition-opacity hover:opacity-90"
          >
            View All Blogs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
