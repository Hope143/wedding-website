
import React, { useEffect, useState } from "react";
import { Fragment } from "react";

const targetTime = new Date("2022-12-30, 2:00 PM").getTime();

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

  const CountdownHandler = () => {
    if(seconds <= 0 && days <= 0 && minutes <= 0 && hours <=0) {
      return (
        <p className="textCountdown fw-semibold text-center">
        <span className="minute">Happening Now!</span>
        </p>
      ) 
    } else {
      return (
        <p className="textCountdown fw-semibold text-center">
        <span className="day">{days}d </span>
        <span className="hour">{hours}hr </span>
        <span className="minute">{minutes}m </span>
        <span className="second">{seconds}s</span>
        </p>
      )
    }
  } 

  console.log(seconds === 0 && days === 0 && minutes === 0 && hours ===0);

  return (
    <Fragment>
      <div>
      {CountdownHandler()}
      </div>
    </Fragment>

  );
};

export default Countdown;