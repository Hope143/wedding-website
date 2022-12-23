import React from 'react'
import locationBG from '../../public/images/location-bg.png'

function Location() {
  return (
    <div className='locationContainer p-5' id='location'>
        <div className="pageContainer">
          <div className='locationHeaderContainer'>
            <h1 className='locationTextHeader  text-center mb-0'>Location</h1>
            <img className='LocationDividingPattern d-flex mx-auto mb-5 mb-sm-4' width={300}  src="/images/dividing-pattern-1.png" alt="photo" />
          </div>
        </div>
        <div className='d-flex justify-content-center w-100'>
        <iframe className='googleLocation' width={1000} height={450} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5273850841236!2d121.02927772539908!3d14.352695568861613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d6d5a9f3aa0f%3A0x77e6c4ae2d49f492!2sLa%20Faite%20Home%20and%20Country%20Garden!5e0!3m2!1sen!2sph!4v1671726509489!5m2!1sen!2sph" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>        
        </div>
    </div>
  )
}

export default Location