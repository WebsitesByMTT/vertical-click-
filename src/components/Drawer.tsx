import React from 'react'
import  {X} from 'lucide-react'
import Link from 'next/link'
import Divider from './Divider'

interface Drawer2Page {
    show : boolean,
    setShow : ()=> void
}

const menuItems = [
  {title : 'Home' , link : '/'},
  {title : 'Services' , link : '/our-services'},
  {title : 'About' , link : '/about-us'},
  {title : 'Contact Us' , link : '/contact-us'},
]
const footerItems = [

  { tag: "Our Blogs", link: "/blogs" },
  { tag: "Our Work", link: "/our-work" },
  { tag: "Get in Touch", link: "/contact-us" },
  // { tag: "Work with us", link: "/contact-us" },
];

function Drawer({show , setShow} : Drawer2Page) {
    return (
        <>
         {show && (
        <div 
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-40 overflow-hidden"
          onClick={setShow}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-3/4 overflow-hidden bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className=" px-8 py-4">
          <div className='flex justify-between items-center mb-6'>  
        <h2 className="text-2xl font-bold mb-4 text-violet-600">Menu</h2>
          {/* Close Button */}
          <button 
            onClick={setShow}
            className="absolute top-4 left-[80%] p-1 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={30} />
          </button>
          </div>
          {/* Drawer Content */}
          <div className="mt-8">
            
            <nav>
              <ul className="space-y-2">
                {
                  menuItems.map((item , index)=>{
                    return(
                      <li key={index}>
                      <Link href={item.link} className="block py-2 text-lg font-semibold hover:text-blue-500">{item.title}</Link>
                    </li>
                    )
                  })
                }
                
              </ul>
            </nav>
          </div>
          <Divider/>
          <div className="flex flex-col space-y-3 ">
          <h3 className="mb-4 text-xl font-bold text-violet-600">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 gap-x-4 gap-y-4">
            {footerItems?.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="text-md text-gray-600 transition-colors hover:text-violet-500 md:text-base"
                >
                  {item.tag}
                </Link>
              );
            })}
          </div>
        </div>
        </div>
      </div>
        </>
      );
}

export default Drawer