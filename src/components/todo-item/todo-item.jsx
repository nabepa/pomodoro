import styles from './todo-item.module.css';
import React from 'react';

const TodoItem = ({ task }) => (
  <li>
    {task.name}
    <button className='material-icons'>delete</button>
  </li>
);

export default TodoItem;
