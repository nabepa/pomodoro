import styles from './timmer.module.css';
import parseTimmer from '../../util/parseTimmer';
import React, { useCallback, useEffect, useState } from 'react';
import SessionTimeController from '../session-time-controller/session-time-controller';

const focusAlert = new Audio(`${process.env.PUBLIC_URL}/audios/focus.wav`);
const breakAlert = new Audio(`${process.env.PUBLIC_URL}/audios/relax.wav`);

const Timmer = (props) => {
  // const [focusTime, setFocusTime] = useState(10 * 60);
  // const [breakTime, setBreakTime] = useState(5 * 50);
  const [focusTime, setFocusTime] = useState(6);
  const [breakTime, setBreakTime] = useState(4);
  const [timeLeft, setTimeLeft] = useState(focusTime);
  const [timmerId, setTimmerId] = useState(null);
  const [sessionType, setSessionType] = useState('Focus'); // 'Focus' | 'Break'

  const isStarted = timmerId !== null; // modifed when this component is re-rendered

  /**
   * Listen to timeLeft
   */
  useEffect(() => {
    if (timeLeft === -1) {
      if (sessionType === 'Focus') {
        setSessionType('Break');
        setTimeLeft(breakTime);
        breakAlert.play();
      } else {
        setSessionType('Focus');
        setTimeLeft(focusTime);
        focusAlert.play();
      }
    }
  }, [timeLeft, focusTime, breakTime, sessionType]);

  const changeSessionTime = useCallback((session, val) => {
    session === 'Focus' ? setFocusTime(val) : setBreakTime(val);
  }, []);

  /**
   * Start and Pause Timmer
   */
  const onStartPause = () => {
    if (isStarted) {
      timmerId && clearInterval(timmerId);
      setTimmerId(null);
    } else {
      const newTimmerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      setTimmerId(newTimmerId);
    }
  };

  const onReset = () => {
    if (timmerId) {
      clearInterval(timmerId);
      setTimmerId(null);
    }
    sessionType === 'Focus' ? setTimeLeft(focusTime) : setTimeLeft(breakTime);
  };

  return (
    <>
      <SessionTimeController
        session='Focus'
        sessionTime={focusTime}
        changeSessionTime={changeSessionTime}
      />
      <SessionTimeController
        session='Break'
        sessionTime={breakTime}
        changeSessionTime={changeSessionTime}
      />
      <button onClick={onStartPause}>start</button>
      <button onClick={onReset}>reset</button>
      <h1>{parseTimmer(timeLeft)}</h1>
    </>
  );
};

export default Timmer;
