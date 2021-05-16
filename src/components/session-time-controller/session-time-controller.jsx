import styles from './session-time-controller.module.css';
import parseTimmer from '../../util/parseTimmer';
import React, { memo } from 'react';

const SessionTimeController = memo(
  ({ session, sessionTime, changeSessionTime }) => {
    const increaseTime = () => {
      changeSessionTime(session, sessionTime + 60);
    };
    const decreaseTime = () => {
      const newTime = sessionTime - 60;
      newTime > 0 && changeSessionTime(session, newTime);
    };

    return (
      <div className={styles.container}>
        <span className={styles.sessionName}>{session}</span>
        <div className={styles.controller}>
          <button
            className={`${styles.btn} material-icons`}
            onClick={decreaseTime}
          >
            remove
          </button>
          <span className={styles.sessionTime}>{parseTimmer(sessionTime)}</span>
          <button
            className={`${styles.btn} material-icons`}
            onClick={increaseTime}
          >
            add
          </button>
        </div>
      </div>
    );
  }
);

export default SessionTimeController;
