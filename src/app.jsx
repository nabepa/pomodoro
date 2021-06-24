import React from 'react';
import styles from './app.module.css';
import Timmer from './components/timmer/timmer';
import TodoApp from './components/todo-app/todo-app';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.timmerContainer}>
        <Timmer />
      </div>
      <div className={styles.todoContainer}>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
