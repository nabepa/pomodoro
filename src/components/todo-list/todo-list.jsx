import styles from './todo-list.module.css';
import React, { memo } from 'react';
import TodoItem from '../todo-item/todo-item';
import TodoAddform from '../todo-addform/todo-addform';

const TodoList = memo(({ tasks, addTask, deleteTask }) => {
  return (
    <section className={styles.todo}>
      <h1 className={styles.title}>Todays's Task</h1>
      <ul className={styles.lists}>
        {Object.keys(tasks).map((key) => (
          <TodoItem key={key} task={tasks[key]} deleteTask={deleteTask} />
        ))}
      </ul>
      <TodoAddform addTask={addTask} />
    </section>
  );
});

export default TodoList;
