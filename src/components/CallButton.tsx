import React from 'react'
import { Phone } from "lucide-react"

function CallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <span className="relative flex h-12 w-12 sm:h-14 sm:w-14">
        {/* Ping background */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>

        {/* Button */}
        <a
          href="tel:+1234567890"
          className="relative inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 bg-purple-600 hover:bg-purple-700 text-white text-xl sm:text-2xl rounded-full shadow-xl transition-transform duration-300"
          aria-label="Call us now"
        >
          <Phone className="h-6 w-6 sm:h-6 sm:w-6 animate-vibrateX" />
        </a>
      </span>
    </div>
  )
}

export default CallButton
