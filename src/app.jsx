import styles from './app.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import Timmer from './components/timmer/timmer';
import Header from './components/header/header';
import TodoList from './components/todo-list/todo-list';
import Footer from './components/footer/footer';

const TIME = { focus: 25 * 60, relax: 5 * 60 };
const SOUND = {
  focus: new Audio(`${process.env.PUBLIC_URL}/audios/focus.wav`),
  relax: new Audio(`${process.env.PUBLIC_URL}/audios/relax.wav`),
};

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(0);
  const [tasks, setTasks] = useState({});

  const resetTimmer = () => {
    setIsPlay(false);
    setTimeLeft(TIME[mode]);
  };

  const onOffTimmer = () => {
    setIsPlay(!isPlay);
  };

  const addTask = useCallback((task) => {
    setTasks((tasks) => {
      const updated = { ...tasks };
      updated[task.id] = task;
      return updated;
    });
  }, []);

  const deleteTask = useCallback((task) => {
    setTasks((tasks) => {
      const updated = { ...tasks };
      delete updated[task.id];
      return updated;
    });
  }, []);

  useEffect(() => {
    if (isPlay) {
      const timer = setTimeout(() => {
        if (timeLeft === 0) {
          setMode((curMode) => {
            if (curMode === 'focus') {
              return 'relax';
            } else {
              return 'focus';
            }
          });
        } else {
          setTimeLeft(timeLeft - 1);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    setTimeLeft(TIME[mode]);
  }, [mode]);

  useEffect(() => {
    isPlay && SOUND[mode].play();
  }, [isPlay, mode]);

  return (
    <div className={styles.app}>
      <Header />
      <Timmer
        timeLeft={timeLeft}
        onOffTimmer={onOffTimmer}
        resetTimmer={resetTimmer}
      />
      <TodoList tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
