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
      <div>
        <button onClick={increaseTime}>+</button>
        <span>{parseTimmer(sessionTime)}</span>
        <button onClick={decreaseTime}>-</button>
      </div>
    );
  }
);

export default SessionTimeController;
