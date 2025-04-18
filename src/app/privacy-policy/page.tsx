import React from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Footer from '@/components/footer/Footer'
import Divider from '@/components/Divider'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Privacy Policy | Vertical Click Marketing Agency",
    description:
      "Learn how Vertical Click collects, uses, and protects your data. Your privacy is important to us—read our full policy for details.",
      alternates : {
        canonical : "https://verticalclick.us/privacy-policy"
      },
      openGraph : {
        title : "Privacy Policy | Vertical Click Marketing Agency",
        description : "Learn how Vertical Click collects, uses, and protects your data. Your privacy is important to us—read our full policy for details.Learn how Vertical Click collects, uses, and protects your data. Your privacy is important to us—read our full policy for details.",
        url : "https://verticalclick.us/privacy-policy",
        type : 'website',
        images : [
          {
            url : 'https://verticalclick.us/logo-og.png',
            height : 630,
            width : 1200,
            alt : 'Vertical Click'
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Vertical Click Marketing Agency",
        description: "Learn how Vertical Click collects, uses, and protects your data. Your privacy is important to us—read our full policy for details.",
        images: ["https://verticalclick.us/logo-og.png"],
      },
  };

function page() {
  return (
    <main>
       <Header/>
       <Container>
       <section className=" pt-12 pb-4 flex-grow">
         <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#F05186] text-center'>Privacy Policy</h1>
        <div className="container mx-auto px-4">
          <div className=" p-6 md:p-10">
            <p className="mb-5">
              Information about Our Data Privacy Policy is subject to changes from time to time.
            </p>
            
            <p className="mb-5">
              It is our utmost concern to protect the personal information of the users while dealing with Vertical Click. This Privacy Policy is about the personal information we collect when you visit our website, use our services, or interact with us through other channels.
            </p>
            
            <p className="mb-5">
              When you visit our website or contact us, we might capture personal information such as <span className="text-pink-500 font-semibold">Vertical Click</span>, <span className="text-pink-500 font-semibold">contact@tracknfly.com</span>, <span className="text-pink-500 font-semibold">+1 469-854-1204 (Toll Free Number)</span>. In addition, we also collect technical data like the IP address, type of browser, device details, and browsing behavior by placing cookies or similar types of tracking technology to improve the user experience and keep an eye on the site's performance.
            </p>
            
            <p className="mb-5">
              However, the information we collect is principally related to providing our online marketing in the best possible way so that it allows us to respond to questions and queries, design a customized marketing plan, manage campaigns, forward some important updates, and finally contribute to improvement in our content and our offerings. We may also take your consent to use your email for sending newsletters, case studies, and other promotional content that is relevant to your interests.
            </p>
            
            <p className="mb-5">
              To prevent data loss, alteration, or orphaned access, we put in place appropriate security measures, both technical and administrative. Nevertheless, there is no 100% safe system of digital transmission or storage, and we recommend that but remain with the principles of your own safety while doing so.
            </p>
            
            <p className="mb-5">
              You have the right to access your information, update it, or erase it as you will. Simply send an email to <span className="text-pink-500 font-semibold">contact@tracknfly.com</span> to unsubscribe from our communications and update or erase your details from our records.
            </p>
          </div>
        </div>
      </section>
      <Divider/>
       </Container>
       <Footer/>
    </main>
  )
}

export default page
