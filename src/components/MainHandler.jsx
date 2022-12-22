import React from 'react';
import FrontPage from './FrontPage';
import Countdown from './Countdown';
import { Fragment } from 'react';

function MainHandler() {
  return (
    <Fragment>
      <FrontPage />
      <Countdown />
    </Fragment>
  )
}

export default MainHandler
