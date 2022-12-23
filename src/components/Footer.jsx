import React from 'react'

function Footer() {
  return (
    <div className='footerContainer p-4 w-100'>
        <div className="container">
        <div className='row justify-content-between'>
            <div className="location col-12 col-md-4 d-block text-center text-md-start fw-semibold">
                <span className='d-block'>Friday, December 30, 2022 at</span>
                <span className='d-block'>3:00 pm</span>
                <span className="d-block">La Faithe Home and Country Garden</span>
                <span className="d-block">San Perdo, Laguna</span>
            </div>
            <div className="footerHeader fw-bold py-4 py-md-0 col-12 col-md-4 position-relative d-flex flex-1">
                <img className='floralFirst' width={90} src="/images/floral1.svg" alt="floral" />
                <p className='coupleName d-block text-center m-auto'>
                    <span className='d-block m-0'>IMMAN</span>
                    <span className='d-block fs-5'>&</span>
                    <span className='d-block'>EM</span>    
                </p>
                <img className='floralSecond' width={90} src="/images/floral1.svg" alt="floral" />
            </div>
            <div className='telNumber col-12 col-md-4 d-block d--md-flex justify-content-end fw-semibold text-center text-md-end'>
                <p className='mb-0'>Tel: 0993849282983</p>
                <p className='mb-0'>Email: weddingday@gmail.com</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer