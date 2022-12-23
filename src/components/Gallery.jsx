
import React, { useEffect, useState } from "react";

const Gallery = () => {

  return (
    <div className="position-relative countdownParent overflow-hidden">
      <div className="countdownContainer px-2 p-5" id="gallery">
        {/* <img className="countdownBg d-md-block d-none"  src="/images/countdownDesign.svg" alt="" />
        <img className="countdownBg2 d-md-block d-none"  src="/images/countdownDesign.svg" alt="" /> */}
        <div className="countdownTextContainer">
          <div>
            <h1 className='textHeader text-center mb-0'>Gallery</h1>
            <img className='dividingPattern d-flex mx-auto mb-5 mb-sm-4' width={300}  src="/images/dividing-pattern-1.png" alt="photo" />
          </div>
          <img className="floral1" src="/images/floral2.svg" alt="" />
          <img className="floral2" src="/images/floral2.svg" alt="" />
          <img className="floral3 d-none d-lg-block" src="/images/floral2.svg" alt="" />
          <img className="floral4 d-none d-lg-block" src="/images/floral2.svg" alt="" />
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../prenupImg/picture3.jpg" className="picture1 d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../prenupImg/picture2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../prenupImg/picture1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../prenupImg/picture4.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../prenupImg/picture5.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="bx bx-chevron-left" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="bx bx-chevron-right" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
  );
};

export default Gallery;