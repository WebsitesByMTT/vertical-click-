import React from 'react';
import Footer from '../footer/Footer';
import Link from 'next/link';

// Function to chunk an array into smaller arrays of size 2
const chunkArray = (array : object[], chunkSize : number) => {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Services1 = () => {
  const services = [
    {
        title: "Digital Strategy and Planning",
        link: "digital-strategy-and-planning",
      },
      {
        title: "Creative Strategy and Web Graphics Design",
        link: "creative-strategy-and-web-graphics-design",
      },
      {
        title: "Social Media Marketing",
        link: "social-media-marketing",
      },
      {
        title: "Videos, GIFs and Content Marketing",
        link: "videos-gifs-and-content-marketing",
      },
      {
        title: "Website Design and Development",
        link: "website-design-and-development",
      },
      {
        title: "Search Engine Optimization",
        link: "search-engine-optimization",
      },
      {
        title: "Email Marketing",
        link: "email-marketing",
      },
      {
        title: "Web Analytics",
        link: "web-analytics",
      },
      {
        title: "Media Planning and Buying",
        link: "media-planning-and-buying",
      },
      {
        title: "Shopify Website & Development",
        link: "shopify-website-and-development",
      },
  ];

  // Chunk the services array into chunks of 2
  const chunkedServices = chunkArray(services, 2);

  return (
    <div className='bg-white text-black w-auto md:w-[70vw] mx-auto '>
      <section className="text-center my-8">
        <h2 className="text-2xl md:text-6xl font-semibold">OUR SERVICES</h2>
      </section>

      <div className="p-4 ">
        {chunkedServices.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className={`flex mb-4 md:mb-8  border-gray-300 pb-2 md:pb-8 ${chunkIndex == chunkedServices.length-1 ? '' : 'border-b-2'}`}>
            {chunk.map((service : any, index : number) => (
              <div 
                key={index} 
                className={`flex-1 flex flex-col items-center justify-between border-gray-300 gap-4 md:gap-12 p-4 relative ${index === 0 ? 'border-r-2' : ''}`}
              >
                <p className="text-sm md:text-3xl font-thin text-center pb-16">{service.title}</p>
                {/* <button className="w-8 h-8 md:w-12 md:h-12 md:text-2xl flex items-center justify-center bg-purple-500 text-white rounded-full">+</button> */}
                <Link
              href={`/our-services/${service.link}`}
              className="w-8 h-8 md:w-12 md:h-12 md:text-2xl flex items-center justify-center bg-purple-500 text-white rounded-full"
            >
              +
            </Link>
              </div>
            ))}
            
          </div>
        ))}
      </div>


    </div>
  );
};

export default Services1;