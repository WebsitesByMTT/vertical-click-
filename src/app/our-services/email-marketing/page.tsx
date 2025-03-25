import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer/Footer";
import Divider from "@/components/Divider";

function page() {

    const emailItems = [
        {
            title: 'Personalized Communication',
            subtitle: 'Customization',
            msg: 'Personalized and branded communication that </br> aligns with your goals',
            img: '/images/email-marketing/email-marketing1.png'
        },
        {
            title: 'Visually Appealing Design',
            subtitle: 'Design',
            msg: 'Design that captures attention',
            img: '/images/email-marketing/email-marketing2.png'
        },
        {
            title: 'Targeted Audience Selection',
            subtitle: 'Targeting',
            msg: 'Targeted audience selection for maximum <br/> conversions and ROI',
            img:'/images/email-marketing/email-marketing3.png'
        },
        {
            title: 'Streamlined Delivery Process',
            subtitle: 'Security',
            msg: 'Secure and easy sending',
            img: '/images/email-marketing/email-marketing4.png'
        },
        {
            title: 'Crafting Compelling Subject Lines',
            subtitle: 'Crafting',
            msg: 'Crafting compelling subject lines that avoid spam <br/>filters',
            img: '/images/email-marketing/email-marketing5.png'
        },
        {
            title: 'Testing and Optimization',
            subtitle: 'Testing',
            msg: 'Testing and optimization to ensure seamless delivery',
            img: '/images/email-marketing/email-marketing6.png'
        }
    ]


    return (
        <React.Fragment>
            <Header />
            <HeroSection
                title="Email Marketing"
                subtitle="Unlock the Power of Email Marketing"
                pinkBgText="Marketing with Vertical Click’s USA"
                description="A well-crafted subject line and visually appealing emailer can make all the difference in driving clicks and conversions. Email marketing offers a unique set of benefits that can help you build strong relationships with customers, reach new leads, and maintain connections with past customers."
            />
         <section className='w-[90vw] lg:w-[70vw] mx-auto my-[5%]  overflow-hidden'>
  <div className='py-8 bg-[#FFFBFA]'>
    <h3 className='text-center text-3xl sm:text-4xl pb-4'>OUR SERVICES INCLUDE</h3>
    <p className='text-center text-sm sm:text-base leading-relaxed'>
      At Vertical Click’s USA, our team of experienced marketers and designers can help you create effective email <br className='hidden sm:block' />
      marketing campaigns that resonate with your audience.
    </p>

    <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mt-8'>
      {emailItems.map((item, index) => (
        <div key={index} className='px-4 pt-2 bg-[#feecf0] gap-4 flex flex-col justify-between rounded-lg shadow-md'>
          <div>
            <h3 className='text-xl sm:text-lg font-semibold'>{item.title.toUpperCase()}</h3>
            <p
              className='mt-4 text-sm text-gray-500 font-sans'
              dangerouslySetInnerHTML={{ __html: item.msg }}
            />
          </div>

          <div className='flex justify-between items-end gap-4 mt-4'>
            <div className='flex flex-col gap-2 p-3 bg-gray-100 shadow-sm rounded-lg mb-8 ml-4'>
              <h4 className='text-purple-600 font-semibold text-xs sm:text-sm'>{item.subtitle}</h4>
              <div className='flex gap-2'>
                <div className='px-6 py-2 bg-gray-200 rounded-lg'></div>
                <div className='px-6 py-2 bg-gray-200 rounded-lg'></div>
              </div>
            </div>

            <div className='flex-shrink-0'>
              <img
                src={item.img}
                alt='Service Image'
                className=' sm:max-w-[25vw] md:max-w-[10vw]  max-w-[40vw]'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <h1 className='max-w-[90vw] md:max-w-[70vw] mx-auto text-2xl sm:text-4xl md:text-5xl mt-8 font-medium uppercase text-center leading-tight'>
    Partnering with Vertical Click’s Euless, Texas has transformed our business approach and significantly increased our ROI.
  </h1>
</section>
      <Divider />

      <Footer />
    </React.Fragment>
  );
}

export default page;
