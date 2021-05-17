import styles from './todo-item.module.css';
import React, { memo } from 'react';

const TodoItem = memo(({ task, deleteTask }) => {
  const onDelete = () => {
    deleteTask(task);
  };

  return (
    <li className={styles.todoItem}>
      <span className={styles.name}>{task.name}</span>
      <button className={`${styles.button} material-icons`} onClick={onDelete}>
        delete
      </button>
    </li>
  );
});

export default TodoItem;
