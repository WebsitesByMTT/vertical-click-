import React from 'react'
const address = "vertical click , best digital marketing agency , usa";
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;


function LocationOnMap() {
  return (
    <div>
      <iframe
        src={mapUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className='w-[95vw] md:w-[70vw] mx-auto rounded-sm mb-2 mt-6'
      ></iframe>
    </div>
  )
}

export default LocationOnMap