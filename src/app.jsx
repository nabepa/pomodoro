import React from 'react';
import styles from './app.module.css';
import Timmer from './components/timmer/timmer';
import TodoApp from './components/todo-app/todo-app';
// import TodoList from './components/todo-list/todo-list';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.timmerContainer}>
        <Timmer />
      </div>
      <div className={styles.todoContainer}>
        {/* <TodoList /> */}
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
