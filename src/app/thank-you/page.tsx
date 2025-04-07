import React from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

function page() {
  return (
    <React.Fragment>
    <Header/>
       
       <div className="h-[80vh] lg:h-[60vh] w-[95vw] lg:w-full mx-auto flex flex-col items-center justify-center space-y-3 text-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
          <h1 className="text-4xl font-bold tracking-tight">Thank You!</h1>
          <p className="text-muted-foreground text-md lg:text-xl p-2">
            Your submission has been received successfully. Your audit will be delivered soon..
          </p>
          <Link href={'/'} className='block w-40 lg:w-50 mx-auto p-4  bg-purple-600 text-white font-bold text-sm lg:text-lg uppercase mt-8 rounded-lg'>Back To Home</Link>
        </div>
  </React.Fragment>
  )
}

export default page