import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { getAllPosts } from "@/lib/data";
import React from "react";
import Link from "next/link";
import he from 'he'
import Divider from "@/components/Divider";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Insights & Tips | Digital Marketing Blog by Experts.",
  description:
    "Stay ahead with Vertical Click’s marketing blog! Get expert tips on SEO, PPC, social media, and branding to grow your business online.",
    alternates : {
      canonical : "https://verticalclick.us/blog"
    },
    openGraph : {
      title : "Marketing Insights & Tips | Digital Marketing Blog by Experts.",
      description : "Stay ahead with Vertical Click’s marketing blog! Get expert tips on SEO, PPC, social media, and branding to grow your business online.",
      url : "https://verticalclick.us/blog",
      type : 'website',
      images : [
        {
          url : 'https://verticalclick.us/logo.svg',
          height : 630,
          width : 1200,
          alt : 'Vertical Click'
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Marketing Insights & Tips | Digital Marketing Blog by Experts.",
      description: "Stay ahead with Vertical Click’s marketing blog! Get expert tips on SEO, PPC, social media, and branding to grow your business online.",
      images: ["https://verticalclick.us/logo.svg"],
    },
};

function stripHtml(html: string): string {
  const witags =  html.replace(/<\/?[^>]+(>|$)/g, ""); 
  return he.decode(witags)
}


const BlogsPage = async () => {
    const posts = await getAllPosts();
  
    return (
      <main>
        <Header />
        <Container>
          <h1 className="my-8 text-center text-4xl md:text-5xl font-bold uppercase">Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts?.edges?.map((post: any, index: number) => ( 
              <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg border border-purple-300 bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  {post?.node?.featuredImage?.node?.sourceUrl ? (
                    <img 
                      src={post?.node?.featuredImage?.node?.sourceUrl} 
                      alt={post?.node?.title || "Blog post image"}
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-purple-300 to-violet-400 flex items-center justify-center">
                      <span className="text-white font-semibold">Vertical Click</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post?.node?.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{stripHtml(post?.node?.excerpt)}</p>
                  <div className="mt-auto">
                    <Link 
                      href={`/blog/${post?.node?.slug}`} 
                      className="inline-block px-4 py-2 bg-[#8F5BFE] text-white font-medium rounded-md hover:bg-purple-700 transition-colors duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Divider/>
        </Container>
        <Footer />
      </main>
    );
  };

export default BlogsPage;
