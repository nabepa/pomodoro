import styles from './todo-item.module.css';
import React, { memo, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Checkbox from '@material-ui/core/Checkbox';

const TodoItem = memo(({ task, index, deleteTask }) => {
  const [done, setDone] = useState(false);
  const onDelete = () => {
    deleteTask(task, index);
  };

  const toggleDone = () => {
    setDone((prev) => {
      return !prev;
    });
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.todoItem}
        >
          <Checkbox classes={{ root: styles.checkbox }} onClick={toggleDone} />
          <span className={`${styles.name} ${done ? styles.done : ''}`}>
            {task.name}
          </span>
          <button
            className={`${styles.button} material-icons`}
            onClick={onDelete}
          >
            clear
          </button>
        </li>
      )}
    </Draggable>
  );
});

export default TodoItem;
