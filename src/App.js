import React, { useState, useEffect } from 'react';

const Clock = ({time}) => {
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    return `${hours}:${minutes}:${seconds}`;
  };

  return <h1>{formatTime(time)}</h1>;
};

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='clock'>
      <div className='tick'>
      <h2>Nuvarande tid:</h2>
      <Clock time={currentTime} />
      </div>
    </div>
  );
};

export default App;
