import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import Timmer from './components/timmer/timmer';

const TIME = { focus: 5, relax: 4 };

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(0);
  const sound = {
    focus: new Audio(`${process.env.PUBLIC_URL}/audios/focus.wav`),
    relax: new Audio(`${process.env.PUBLIC_URL}/audios/relax.wav`),
  };

  const resetTimmer = () => {
    const resetMode = 'focus';
    setIsPlay(false);
    setMode(resetMode);
    setTimeLeft(TIME[resetMode]);
  };

  const onOffTimer = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    if (isPlay) {
      const timer = setTimeout(() => {
        if (timeLeft === 0) {
          setMode((curMode) => {
            if (curMode === 'focus') {
              setMode('relax');
            } else {
              setMode('focus');
            }
          });
        } else {
          setTimeLeft(timeLeft - 1);
          console.log(`else ${mode}`);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    setTimeLeft(TIME[mode]);
  }, [mode]);

  useEffect(() => {
    isPlay && sound[mode].play();
  }, [isPlay, mode]);

  return (
    <>
      <h1>{mode}</h1>
      <button onClick={resetTimmer}>Reset</button>
      <Timmer timeLeft={timeLeft} onOffTimer={onOffTimer} />
    </>
  );
}

export default App;
