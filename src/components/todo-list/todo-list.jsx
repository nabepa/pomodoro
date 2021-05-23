import styles from './todo-list.module.css';
import React, { memo, useCallback, useState } from 'react';
import TodoAdd from '../todo-add/todo-add';
import TodoItem from '../todo-item/todo-item';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TodoList = memo((props) => {
  const [data, setData] = useState({
    tasks: {
      'task-1': { id: 'task-1', name: 'do1' },
      'task-2': { id: 'task-2', name: 'do2' },
    },
    tasksOrder: ['task-1', 'task-2'],
  });

  const onDragEnd = () => {};

  const addTask = (task) => {
    console.log('task');
  };
  // const addTask = useCallback((task) => {
  //   setTasks((tasks) => {
  //     const updated = { ...tasks };
  //     updated[task.id] = task;
  //     return updated;
  //   });
  // }, []);

  const deleteTask = (task) => {
    console.log('task');
  };
  // const deleteTask = useCallback((task) => {
  //   setTasks((tasks) => {
  //     const updated = { ...tasks };
  //     delete updated[task.id];
  //     return updated;
  //   });
  // }, []);

  // return (
  //   <section className={styles.todoList}>
  //     <h1 className={styles.title}>to-do</h1>
  //     <ul className={styles.ul}>
  //       {Object.keys(tasks).map((key) => (
  //         <TodoItem key={key} task={tasks[key]} deleteTask={deleteTask} />
  //       ))}
  //     </ul>
  //     <TodoAdd addTask={addTask} />
  //   </section>
  // );

  return (
    <section className={styles.todoList}>
      <h1 className={styles.title}>to-do</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={0}>
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
      </DragDropContext>
      <TodoAdd addTask={addTask} />
    </section>
  );
});

export default TodoList;
