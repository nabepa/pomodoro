import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import Timmer from './components/timmer/timmer';

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  const onClick = () => {
    setIsPlay(!isPlay);
  };

  const handdleStop = () => {
    setIsPlay(false);
    setTimeLeft(25 * 60);
  };

  useEffect(() => {
    if (isPlay) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      <button onClick={onClick}>Start</button>
      <button onClick={handdleStop}>Reset</button>
      <div>
        {Math.floor(timeLeft / 60)} MIN {timeLeft % 60} SEC
      </div>
    </>
  );
}

export default App;
