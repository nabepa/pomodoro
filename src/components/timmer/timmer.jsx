import styles from './timmer.module.css';
import React from 'react';

const Timmer = ({ timeLeft, onOffTimmer, resetTimmer }) => {
  const sec = timeLeft % 60;
  const min = Math.floor(timeLeft / 60) % 60;

  const onStart = () => {
    onOffTimmer();
  };

  const onReset = () => {
    resetTimmer();
  };

  return (
    <section className={styles.timmer}>
      <button className={styles.startBtn}>
        <img
          onClick={onStart}
          className={styles.logo}
          src='/images/logo.png'
          alt=''
        />
      </button>
      <div className={styles.container}>
        <p className={styles.timeText}>
          {min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
        </p>
        <button onClick={onReset} className={`${styles.reset} material-icons`}>
          restart_alt
        </button>
      </div>
    </section>
  );
};

export default Timmer;
