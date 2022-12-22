import React from 'react';
import FrontPage from './FrontPage';
import Gallery from './Gallery';
import Location from './Location';
import { Fragment } from 'react';

function MainHandler() {
  return (
    <Fragment>
      <FrontPage />
      <Location/>
      <Gallery />
    </Fragment>
  )
}

export default MainHandler
