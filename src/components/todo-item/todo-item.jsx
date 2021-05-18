import styles from './todo-item.module.css';
import React, { memo, useState } from 'react';

const TodoItem = memo(({ task, deleteTask }) => {
  const [done, setDone] = useState(false);
  const onDelete = () => {
    deleteTask(task);
  };

  const toggleDone = () => {
    setDone((prev) => {
      return !prev;
    });
  };

  return (
    <li onClick={toggleDone} className={styles.todoItem}>
      <span className={`${styles.name} ${done ? styles.done : ''}`}>
        {task.name}
      </span>
      <button className={`${styles.button} material-icons`} onClick={onDelete}>
        clear
      </button>
    </li>
  );
});

export default TodoItem;
