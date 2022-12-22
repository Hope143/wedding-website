import React from 'react';
import DateCountdown from 'react-date-countdown-timer';



function Countdown() {
  return (
    <div className='countdownContainer m-auto p-5 w-100 position-relative'>
      <h1 className='textHeader text-center mb-0'>Countdown</h1>
      <img className='dividingPattern d-flex mx-auto mb-5' width={300}  src="/images/dividing-pattern-1.png" alt="photo" />
      <div className='text-center fs-1 fw-semibold'>
        <DateCountdown dateTo='December 30, 2022 00:00:00 GMT+03:00' callback={()=>alert('Hello')}  />
      </div>
    </div>
  )
}

export default Countdown
