// import Container from "@/components/Container";
// import Footer from "@/components/footer/Footer";
// import Header from "@/components/Header";
// import { getAllPosts } from "@/lib/data";
// import React from "react";
// import Link from "next/link";
// import he from 'he'
// import Divider from "@/components/Divider";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Marketing Insights & Tips | Digital Marketing Blog by Experts.",
//   description:
//     "Stay ahead with Vertical Click’s marketing blog! Get expert tips on SEO, PPC, social media, and branding to grow your business online.",
//     alternates : {
//       canonical : "https://verticalclick.us/blog"
//     }
// };

// function stripHtml(html: string): string {
//   const witags =  html.replace(/<\/?[^>]+(>|$)/g, ""); 
//   return he.decode(witags)
// }


// const BlogsPage = async () => {
//   const posts = await getAllPosts();
//    console.log("posts", posts?.edges[0]);
//    console.log("featured image is : ", posts.edges[0].featuredImage?.node.sourceUrl)

//   return (
//     <main>
//       <Header />
//       <Container>
//         <h1 className="my-8 text-center text-5xl font-bold uppercase">Blogs</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {posts?.edges?.map((post: any, index: number) => ( 
//             <div key={index} className="px-4 py-4 my-4 md:my-8 flex flex-col md:flex-row items-center gap-4 border border-purple-600 shadow-xl rounded-md bg-gradient-to-b from-white to-violet-300">
//                   <img 
//                      src={post?.node?.featuredImage?.node?.sourceUrl} 
//                      alt=""
//                      className="w-100 rounded-md" 
//                     />
//                 <div className="">
//                     <h3 className="text-lg md:text-xl font-semibold">{post?.node?.title}</h3>
//                     <p className="text-sm word-break">{stripHtml(post?.node?.excerpt).substring(0 , 150)}</p>
//                      <Link href={`/blog/${post?.node?.slug}`} className="block w-[40%] text-white text-semibold text-center p-2 bg-[#8F5BFE] rounded-md border border-white  mt-4">Read More</Link>
//                 </div>
//             </div>
            
//           ))}
//           </div>
//         <Divider/>
//       </Container>
//       <Footer />
//     </main>
//   );
// };

// export default BlogsPage;
