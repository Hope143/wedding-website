
import React, { useEffect, useState } from "react";

const targetTime = new Date("2022-12-30").getTime();

const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdownContainer p-4 position-relative">
      <img className="countdownBg d-md-block d-none"  src="/images/countdownDesign.svg" alt="" />
      <img className="countdownBg2 d-md-block d-none"  src="/images/countdownDesign.svg" alt="" />
<div className="countdownTextContainer">
<div>
<h1 className='textHeader text-center mb-0'>Countdown</h1>
      <img className='dividingPattern d-flex mx-auto mb-4' width={300}  src="/images/dividing-pattern-1.png" alt="photo" />
      <h1 className="countdownText text-center">
        <span className="day">{days}d </span>
        <span className="hour">{hours}hr </span>
        <span className="minute">{minutes}m </span>
        <span className="second">{seconds}s</span>
      </h1>
</div>
</div>
    </div>
  );
};

export default Countdown;