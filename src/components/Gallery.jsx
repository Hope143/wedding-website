
import React, { useEffect, useState } from "react";

const Gallery = () => {

  return (
    <div className="countdownContainer p-0 p-sm-4 position-relative">
        <img className="countdownBg d-md-block d-none"  src="/images/countdownDesign.svg" alt="" />
        <img className="countdownBg2 d-md-block d-none"  src="/images/countdownDesign.svg" alt="" />
        <div className="countdownTextContainer">
          <div>
            <h1 className='textHeader text-center mb-0'>Location</h1>
            <img className='dividingPattern d-flex mx-auto mb-5 mb-sm-4' width={300}  src="/images/dividing-pattern-1.png" alt="photo" />
          </div>
        </div>
    </div>
  );
};

export default Gallery;