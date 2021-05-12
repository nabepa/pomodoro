import styles from './todo-list.module.css';
import React from 'react';
import TodoItem from '../todo-item/todo-item';
import TodoAddform from '../todo-addform/todo-addform';

const TodoList = ({ tasks, addTask }) => {
  return (
    <section className={styles.todoSection}>
      <h1>Todays's Task</h1>
      <ul className={styles.todoList}>
        {Object.keys(tasks).map((key) => (
          <TodoItem key={key} task={tasks[key]} />
        ))}
      </ul>
      <TodoAddform addTask={addTask} />
    </section>
  );
};

export default TodoList;
