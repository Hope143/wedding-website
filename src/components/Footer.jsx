import React from 'react'

function Footer() {
  return (
    <div className='footerContainer p-4 w-100'>
        <div className="container">
        <div className='row justify-content-between'>
            <div className="location col-12 col-md-4 d-block text-center text-md-start fw-semibold">
                <span className='d-block'>Friday, December 30, 2022 at</span>
                <span className='d-block'>2:00 pm</span>
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
            <div className='weddingBTS col-12 col-md-4 d-block d--md-flex justify-content-end fw-semibold text-center text-md-end'>
                <a className='mb-0 googleForm' href='https://docs.google.com/forms/d/e/1FAIpQLScgYdhKFGMcKKXOHdvyEw2BoQB_48h0pvGipqyvPNmSiUYx4Q/viewform' target="_blank" >Reserve Your Sit Here!</a>
                <p>
                    <a href='https://instagram.com/jaellaura?igshid=YmMyMTA2M2Y=' target="_blank"  className='d-block'>Art Visual by: @jaellaura <i className='bx bxl-instagram-alt mb-0 fs-5' ></i></a>
                    <a href='https://www.facebook.com/luntianstudios?mibextid=LQQJ4d' target="_blank"  className='d-block'>Videos: Trick Shot Films <i className='bx bxl-facebook-circle fs-5'></i></a>
                    <a href='https://www.facebook.com/trickshotfilms00/?mibextid=LQQJ4d' target="_blank"  className='d-block'>Photos: Luntian Studios <i className='bx bxl-facebook-circle fs-5'></i></a>
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer