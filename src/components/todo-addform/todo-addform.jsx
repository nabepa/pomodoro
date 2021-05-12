import styles from './todo-addform.module.css';
import React, { useRef } from 'react';

const TodoAddform = ({ addTask }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const task = { id: Date.now(), name: inputRef.current.value };
    task.name && addTask(task);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.addForm} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className={styles.input}
        type='text'
        placeholder='Input your task!'
      />
    </form>
  );
};

export default TodoAddform;