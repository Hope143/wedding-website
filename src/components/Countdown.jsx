
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
    <>
        <p className="textCountdown fw-semibold text-center">
        <span className="day">{days}d </span>
        <span className="hour">{hours}hr </span>
        <span className="minute">{minutes}m </span>
        <span className="second">{seconds}s</span>
        </p>
    </>

  );
};

export default Countdown;