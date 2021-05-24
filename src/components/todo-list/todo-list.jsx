import styles from './todo-list.module.css';
import React, { memo } from 'react';
import TodoItem from '../todo-item/todo-item';
import { Droppable } from 'react-beautiful-dnd';

const TodoList = memo(({ data, deleteTask }) => (
  <Droppable droppableId={'0'}>
    {(provided) => (
      <ul
        ref={provided.innerRef}
        {...provided.droppableProps}
        className={styles.ul}
      >
        {data.tasksOrder.map((taskId, index) => {
          const task = data.tasks[taskId];
          return (
            <TodoItem
              key={task.id}
              task={task}
              index={index}
              deleteTask={deleteTask}
            />
          );
        })}
        {provided.placeholder}
      </ul>
    )}
  </Droppable>
));

export default TodoList;
