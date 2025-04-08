import React from 'react'

function Loader() {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] bg-opacity-50 z-40 flex items-center justify-center">
    <div className="relative">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-200 border-t-purple-600 rounded-full animate-spin"></div>
      
      {/* Optional loading text */}
      {/* <div className="mt-4 text-center text-gray-200 font-medium">Loading...</div> */}
    </div>
  </div>
  )
}

export default Loader