import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import Timmer from './components/timmer/timmer';

const FOCUS_TIME = 2;
const RELAX_TIME = 1;

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME * 2);

  const handdleStart = () => {
    setIsPlay(!isPlay);
  };

  const handdleStop = () => {
    setIsPlay(false);
    setMode('focus');
    setTimeLeft(FOCUS_TIME * 2);
  };

  const changeMode = () => {
    switch (mode) {
      case 'focus':
        setMode('relax');
        setTimeLeft(RELAX_TIME * 2);
        break;
      case 'relax':
        setMode('focus');
        setTimeLeft(FOCUS_TIME * 2);
        break;
      default:
        throw new Error(`${mode} is undefinded mode`);
    }
  };

  useEffect(() => {
    if (isPlay) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      if (timeLeft == -1) {
        changeMode();
      }

      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      <button onClick={handdleStart}>Start</button>
      <button onClick={handdleStop}>Reset</button>
      <div>
        {Math.floor(timeLeft / 60)} MIN {timeLeft % 60} SEC
      </div>
    </>
  );
}

export default App;
