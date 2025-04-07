import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import { Container } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
 
export default function NotFound() {
  return (
    <React.Fragment>
      <Header/>
      {/* <Container>
      </Container> */}
         <div className='w-[90vw] lg:w-[70vw]  text-center mt-[20vh] mx-auto font-sans'>
       <h1 className='text-5xl lg:text-8xl py-2 text-pink-400 font-bold'>404</h1>
         <h5 className='text-3xl lg:text-6xl font-bold text-black'>Page cannot be found.</h5>
         <p className='text-sm lg:text-md pt-4 text-gray-600 font-bold'>The page you are looking for does not exist. It may have been moved, or removed altogether.<br/>
          Perhaps you can return back to the site's homepage and see if you can find what you are looking for.</p>
          
          <Link href={'/'} className='block w-40 lg:w-50 mx-auto p-4  bg-purple-600 text-white font-bold text-sm lg:text-lg uppercase mt-8 rounded-lg'>Back To Home</Link>
       </div>
    </React.Fragment>
  )
}