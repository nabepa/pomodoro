import styles from './todo-item.module.css';
import React, { memo } from 'react';

const TodoItem = memo(({ task, deleteTask }) => {
  const onDelete = () => {
    deleteTask(task);
  };

  return (
    <li>
      <span>{task.name}</span>
      <button onClick={onDelete} className='material-icons'>
        delete
      </button>
    </li>
  );
});

export default TodoItem;
