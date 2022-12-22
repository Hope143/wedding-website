import React from 'react';
import FrontPage from './FrontPage';
import Gallery from './Gallery';
import { Fragment } from 'react';

function MainHandler() {
  return (
    <Fragment>
      <FrontPage />
      <Gallery />
    </Fragment>
  )
}

export default MainHandler
