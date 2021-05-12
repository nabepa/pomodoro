import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import Timmer from './components/timmer/timmer';

const TIME = { focus: 4, relax: 2 };

function AppForQuestion() {
  const [isPlay, setIsPlay] = useState(false);
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(TIME.focus);

  const onOffTimer = () => {
    setIsPlay(!isPlay);
  };

  // const changeMode = () => {
  //   switch (mode) {
  //     case 'focus':
  //       setMode('relax');
  //       break;
  //     case 'relax':
  //       setMode('focus');
  //       break;
  //     default:
  //       throw new Error(`${mode} is undefinded mode`);
  //   }
  // };

  useEffect(() => {
    if (isPlay) {
      const timer = setTimeout(() => {
        if (timeLeft === 0) {
          setMode((cur) => {
            if (cur === 'focus') {
              setMode('relax');
            } else {
              setMode('focus');
            }
          });
          setTimeLeft(TIME[mode]);
        } else {
          setTimeLeft(timeLeft - 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  // useEffect(() => {
  //   if (isPlay) {
  //     const timer = setTimeout(() => {
  //       if (timeLeft === 0) {
  //         changeMode();
  //       } else {
  //         setTimeLeft(timeLeft - 1);
  //       }
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }
  // });

  // useEffect(() => {
  //   setTimeLeft(TIME[mode]);
  // }, [mode]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{mode}</h1>
      <Timmer timeLeft={timeLeft} onOffTimer={onOffTimer} />
    </>
  );
}

export default AppForQuestion;
