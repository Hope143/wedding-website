import React, { useState } from "react";
import "../sass/app.scss";
import bgImage from "../../public/images/flower-bg.mp4";

function FrontPage() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="frontPage position-relative">
      <video playsInline autoPlay muted loop className="back-video">
        <source src={bgImage} type="video/mp4" />
      </video>
      <nav className="navbar navbar-expand-md py-3 py-lg-0 p-lg-0 ">
        <div className="navbarContainer container d-flex justify-content-between">
          <div>
            <a className="navbar-brand" href="#">
              Navbar
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
              class={`bx menuBar ${
                openMenu ? " bx-menu-alt-right" : " bx-menu"
              }`}
            ></i>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link fs-6" aria-current="page" href="#">
                HOME
              </a>
              <a className="nav-link fs-6" href="#">
                COUNTDOWN
              </a>
              <a className="nav-link fs-6" href="#">
                GALLERY
              </a>
              <a className="nav-link fs-6" href="#">
                LOCATION
              </a>
            </div>
          </div>
        </div>
      </nav>

      <img
        className="landingFlower img-fluid"
        src="../../public/images/motif3.png"
        alt="flower"
      />
      <img
        className="landingFlower2 img-fluid"
        src="../../public/images/motif3.png"
        alt="flower"
      />

      <div className="titlePage">
        <h1 className="titleHeader d-flex align-items-end">
          EM <h2 className="andHeader px-4">&</h2> IMMAN
        </h1>
      </div>
    </div>
  );
}

export default FrontPage;
