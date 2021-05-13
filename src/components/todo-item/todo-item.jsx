import styles from './todo-item.module.css';
import React from 'react';

const TodoItem = ({ task }) => (
  <li className={styles.task}>
    <span className={styles.name}>{task.name}</span>
    <button className={`${styles.deleteBtn} material-icons`}>delete</button>
  </li>
);

export default TodoItem;
