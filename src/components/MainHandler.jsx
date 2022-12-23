import React from 'react';
import FrontPage from './FrontPage';
import Gallery from './Gallery';
import Location from './Location';
import Footer from './Footer';
import { Fragment } from 'react';

function MainHandler() {
  return (
    <main>
      <FrontPage />
      <Location/>
      <Gallery />
      <Footer/> 
    </main>
  )
}

export default MainHandler
