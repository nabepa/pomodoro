import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import Timmer from './components/timmer/timmer';

const FOCUS_TIME = 2;
const RELAX_TIME = 1;
const TIME = { focus: 2, relax: 1 };

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME * 2);
  // const relaxSound = new Audio(relaxWav);
  const relaxSound = new Audio(process.env.PUBLIC_URL + '/audios/relax.wav');

  const onOffTimer = () => {
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
        break;
      case 'relax':
        setMode('focus');
        break;
      default:
        throw new Error(`${mode} is undefinded mode`);
    }
  };

  useEffect(() => {
    if (isPlay) {
      const timer = setTimeout(() => {
        let t = timeLeft - 1;
        if (t == -1) {
          changeMode();
          t = TIME[mode] * 2;
        }
        setTimeLeft(t);
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      <button onClick={handdleStop}>Reset</button>
      <button onClick={() => relaxSound.play()}>Sound</button>
      <Timmer timeLeft={timeLeft} onOffTimer={onOffTimer} />
    </>
  );
}

export default App;
