import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import Timmer from './components/timmer/timmer';
import Header from './components/header/header';

// const TIME = { focus: 25 * 60, relax: 5 * 60 };
const TIME = { focus: 10, relax: 3 };

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(0);
  const sound = {
    focus: new Audio(`${process.env.PUBLIC_URL}/audios/focus.wav`),
    relax: new Audio(`${process.env.PUBLIC_URL}/audios/relax.wav`),
  };

  const resetTimmer = () => {
    setIsPlay(false);
    setTimeLeft(TIME[mode]);
  };

  const onOffTimmer = () => {
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
      <Header />
      <Timmer
        timeLeft={timeLeft}
        onOffTimmer={onOffTimmer}
        resetTimmer={resetTimmer}
      />
    </>
  );
}

export default App;
