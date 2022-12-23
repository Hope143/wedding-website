import React from 'react';
import FrontPage from './FrontPage';
import Gallery from './Gallery';
import Location from './Location';
import { Fragment } from 'react';

function MainHandler() {
  return (
    <main>
      <FrontPage />
      <Location/>
      <Gallery />
    </main>
  )
}

export default MainHandler
