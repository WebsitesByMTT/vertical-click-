import React from "react";
import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { getPostBySlug } from "@/lib/data";
import Divider from "@/components/Divider";
import Script from "next/script";
import { Metadata } from "next";

export async function generateMetadata({ params } :{ params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { post } = await getPostBySlug(slug, false, []);
  
    const ogImage = post?.seo?.opengraphImage?.sourceUrl || "https://verticalclick.us/logo.svg";
  
    return {
      title: post?.seo?.title || post?.title,
      description: post?.seo?.metaDesc,
      openGraph: {
        title: post?.seo?.title || post?.title,
        description: post?.seo?.metaDesc,
        url: `https://www.verticalclick.us/blog/${slug}`,
        type: "article",
        publishedTime: post?.date,
        authors: [post?.author?.node?.name],
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post?.seo?.opengraphImage?.altText || post?.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post?.seo?.title || post?.title,
        description: post?.seo?.metaDesc,
        images: [ogImage],
      },
    };
  }



async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { post } = await getPostBySlug(slug, false, []);
   
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.verticalclick.us/${slug}`,
    },
    headline: post?.title,
    description: post?.seo?.metaDesc,
    image: post?.seo?.opengraphImage?.sourceUrl,
    author: {
      "@type": "Organization",
      name: "TrippyBug",
    },
    publisher: {
      "@type": "Organization",
      name: post?.author?.node?.name,
      logo: {
        "@type": "ImageObject",
        url: "https://verticalclick.us/logo.svg",
      },
    },
    datePublished: post?.date,
  };

  return (
    <React.Fragment>
      <Script
      id="blog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}  
      />
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
    </React.Fragment>
  );
}

export default BlogPost;
