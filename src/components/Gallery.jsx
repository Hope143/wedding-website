
import React, { useEffect, useState } from "react";
import prenupimg from '../../public/prenupImg/picture1.jpg'

const Gallery = () => {

  return (
    <div className="countdownContainer p-5 position-relative">
        {/* <img className="countdownBg d-md-block d-none"  src="/images/countdownDesign.svg" alt="" />
        <img className="countdownBg2 d-md-block d-none"  src="/images/countdownDesign.svg" alt="" /> */}
        <div className="countdownTextContainer">
          <div>
            <h1 className='textHeader text-center mb-0'>Gallery</h1>
            <img className='dividingPattern d-flex mx-auto mb-5 mb-sm-4' width={300}  src="/images/dividing-pattern-1.png" alt="photo" />
          </div>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../public/prenupImg/picture1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../../public/prenupImg/picture2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../../public/prenupImg/picture3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../../public/prenupImg/picture4.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../../public/prenupImg/picture5.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Gallery;