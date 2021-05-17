import styles from './todo-list.module.css';
import React, { memo, useCallback, useState } from 'react';
import TodoAdd from '../todo-add/todo-add';
import TodoItem from '../todo-item/todo-item';

const TodoList = memo((props) => {
  const [tasks, setTasks] = useState({});

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

  return (
    <section className={styles.todoList}>
      <h1 className={styles.title}>to-do</h1>
      <ul className={styles.ul}>
        {Object.keys(tasks).map((key) => (
          <TodoItem key={key} task={tasks[key]} deleteTask={deleteTask} />
        ))}
      </ul>
      <TodoAdd addTask={addTask} />
    </section>
  );
});

export default TodoList;
