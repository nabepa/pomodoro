import styles from './todo-item.module.css';
import React, { memo, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = memo(({ task, index, deleteTask }) => {
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
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.todoItem}
          onClick={toggleDone}
        >
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
