import styles from './timmer.module.css';
import parseTimmer from '../../util/parseTimmer';
import React, { useCallback, useEffect, useState } from 'react';
import SessionTimeController from '../session-time-controller/session-time-controller';
import VolumeController from '../volume-controller/volume-controller';

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
  const [volume, setVolume] = useState(30);

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

  const handdleVolume = useCallback((event, vol) => {
    setVolume(vol);
    const newVol = vol / 100;
    focusAlert.volume = newVol;
    breakAlert.volume = newVol;
  }, []);

  return (
    <section className={styles.timmer}>
      <div className={styles.sessions}>
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
      </div>
      <div className={styles.timeContainer}>
        <span className={styles.time}>{parseTimmer(timeLeft)}</span>
        <div className={`${styles.spinner} ${getStyles(sessionType)} `}></div>
      </div>
      <div className={styles.ui}>
        <button
          className={`${styles.button} material-icons`}
          onClick={onStartPause}
        >
          {isStarted ? 'pause' : 'play_arrow'}
        </button>
        <button
          className={`${styles.button} ${styles.restart} material-icons`}
          onClick={onReset}
        >
          restart_alt
        </button>
        <div className={styles.volume}>
          <VolumeController
            volume={volume}
            handdleVolume={handdleVolume}
            sessionType={sessionType}
          />
        </div>
      </div>
    </section>
  );
};

function getStyles(sessionType) {
  switch (sessionType) {
    case 'Focus':
      return styles.focus;
    case 'Break':
      return styles.break;
    default:
      throw new Error(`unknown sessionType: ${sessionType}`);
  }
}

export default Timmer;
