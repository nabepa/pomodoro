import styles from './timmer.module.css';
import React from 'react';

const Timmer = ({ timeLeft, onOffTimer }) => {
  const sec = timeLeft % 60;
  const min = Math.floor(timeLeft / 60) % 60;

  const onStart = () => {
    onOffTimer();
  };

  return (
    <div className={styles.timmer}>
      <button className={styles.startBtn}>
        <img
          onClick={onStart}
          className={styles.logo}
          src='/images/logo.png'
          alt=''
        />
      </button>
      <h1>
        {min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
      </h1>
    </div>
  );
};

export default Timmer;
