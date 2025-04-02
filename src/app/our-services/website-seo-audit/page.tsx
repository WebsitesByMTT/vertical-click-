import React from 'react'
import Container from '@/components/Container'
import Divider from '@/components/Divider'
import Header from '@/components/Header'
import Footer from '@/components/footer/Footer'
import HeroSection from '@/components/HeroSection'

const audits = [
    {
        title : 'Website Audit',
        desc : "Examine your website's architecture, indexing, SEO-friendliness, and design to enhance its image in search engines.",
        imgLink : '/icons/audits/icon1.svg'
    },
    {
        title : 'SEO Audit',
        desc : "Receive a technical, on-page, and off-page SEO audit to improve page speed, crawlability, keyword research, and content quality.",
        imgLink : '/icons/audits/icon2.svg'
    },
    {
        title : 'Social Media Audit',
        desc : "Optimize your social media profiles across platforms for consistency, user experience, and relevance.",
        imgLink : '/icons/audits/icon3.svg'
    },
    {
        title : 'Website Content Audit',
        desc : "Evaluate your content's relevance, helpfulness, and detail to ensure it ranks high on Google SERPs.",
        imgLink : '/icons/audits/icon4.svg'
    },
    {
        title : 'SEM Audit',
        desc : "Analyze your paid ads' effectiveness, targeting, and campaign settings to maximize results.",
        imgLink : '/icons/audits/icon5.svg'
    },
    {
        title : 'UI/UX Audit',
        desc : "Enhance your website's user experience and brand relevance with a comprehensive UI/UX audit.",
        imgLink : '/icons/audits/icon6.svg'
    },
    {
        title : 'CRO Audit',
        desc : "Identify key conversion actions, examine user behavior, and run A/B testing to optimize conversion rates.",
        imgLink : '/icons/audits/icon7.svg'
    },
]
function WSA() {
  return (
    <React.Fragment>
        <Header/>
        <Container>
         <section className="flex flex-col gap-8 md:flex-row">
          <h3 className="text-4xl font-medium uppercase lg:text-5xl">
            In today's digital landscape, content is king.
          </h3>
          <p className="max-w-2xl text-xl font-normal lg:text-2xl">
            When marketed effectively, it can propel your brand and business to
            new heights. The most popular content formats now include videos,
            GIFs, and interactive media, in addition to traditional text and
            static images.
          </p>
        </section>
        <Divider/>
        <section>
            <div>
              <h3 className='text-4xl font-medium uppercase lg:text-5xl pb-4'>Unlock Your Business's Growth Potential with Our Free Website Audit</h3>
              <p className='text-xl font-normal lg:text-2xl text-gray-600 font-sans'>Discover areas for improvement and optimize your online presence with our comprehensive website audit. Our free audit covers seven key areas:</p>
            </div>
            <div className='md:px-4 mx-auto'>
                {
                    audits.map((item , index)=>{
                        return(
                            <div className='flex space-x-8 p-4 md:p-8 bg-[#f4efff] my-4 rounded-xl'>
                                <div>
                                    <img src={item.imgLink} alt="" className='w-24 md:w-12'/>
                                </div>
                                <div>
                                    <h6 className='text-[#8F5BFE] text-lg md:text-2xl'>{item.title}</h6>
                                    <p className='text-[#8F5BFE] text-sm md:text-md'>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <Divider/>
        <section className="rounded-md bg-black p-8 text-white md:p-14">
          <h2 className="text-4xl font-medium md:text-5xl">
             Why Partner with Vertical Click for Your Audit Needs?
          </h2>
          <p className='mt-5 text-lg font-normal'>To outshine your competitors and win over customers, a thorough analysis of your digital marketing channels is crucial. Vertical Click excels in providing:</p>
          <p className="ml-2 mt-5 text-lg font-normal">
             - Data-driven insights to pinpoint areas for improvement<br/>
             - Tailored solutions addressing specific challenges<br/> 
             - Strategic recommendations for enhanced online presence<br/>
             - Clear goal-setting for measurable outcomes<br/>
             - Enhanced user experience for improved website performance and lead generation<br/>
             - Comprehensive support for a seamless digital experience
            
          </p>
          <p className='mt-5 text-lg font-normal'>By choosing Vertical Click, you'll gain a competitive edge and unlock opportunities for growth and success.</p>
        </section>
        <Divider/>
        </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default WSA