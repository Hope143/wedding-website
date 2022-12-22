import React, { useEffect, useState } from "react";
import "../sass/app.scss";
import bgImage from '/images/flower-bg.mp4'
import { useLocation } from "react-router-dom";

function FrontPage() {
  const [openMenu, setOpenMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  const currentLocation = useLocation().hash;
  console.log( currentLocation == '#countdown');

  return (
    <div className="frontPage position-relative">
      <video playsInline autoPlay muted loop className="back-video">
        <source src={bgImage} type="video/mp4" />
      </video>
      <nav className={`navbar navbar-expand-md py-3 py-lg-0 p-lg-0 ${navbar ? 'NavbarParentScrolled' : 'NavbarParent'}`}>
        <div className="navbarContainer py-3  py-md-0 container d-flex justify-content-between">
          <div>
            <a className="navbar-brand fst-italic" href="#">
              WEDDING DAY
            </a>
          </div>
          <button
            className=" navbar-toggler border-0  p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
          >
            <i
              className={`bx menuBar ${
                openMenu ? " bx-menu-alt-right" : " bx-menu"
              }`}
            ></i>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className={`nav-link fs-6 ${currentLocation === '' ? 'activeLink' : ''}`} href="#">
                HOME
              </a>
              <a className={`nav-link fs-6 ${currentLocation === '#countdown' ? 'activeLink' : ''}`} fs-6 href="#countdown">
                COUNTDOWN
              </a>
              <a className={`nav-link fs-6 ${currentLocation === '#gallery' ? 'activeLink' : ''}`} href="#gallery">
                GALLERY
              </a>
              <a className={`nav-link fs-6 ${currentLocation === '#location' ? 'activeLink' : ''}`} href="#location">
                LOCATION
              </a>
            </div>
          </div>
        </div>
      </nav>
              
      

      <div className="titlePage vh-100">
      <img
        className="landingFlower img-fluid"
        src="../../images/landing-flower.png"
        alt="flower"
      />
      <img
        className="landingFlower2 img-fluid"
        src="../../images/motif2.png"
        alt="flower"
      />
        <div className="text-Container">
        <h1 className="titleHeader mb-3 d-lg-flex align-items-end d-none">
          IMMAN <span className="andHeader px-4">&</span> EM
        </h1>
        <h1 className="titleHeader mb-3 d-flex text-center d-lg-none align-items-end">
        EM & IMMAN
        </h1>
      
        <div className="d-block justify-content-center ">
        <h3 className="fst-italic fw-lighter text-center mb-3 text-light">Are getting married in</h3>
        <h4 className="fst-italic fw-light text-center text-light">December 30, 2022</h4>
        
        </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
