import styles from './todo-add.module.css';
import React, { memo, useRef } from 'react';

const TodoAdd = memo(({ addTask }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const task = { id: Date.now(), name: inputRef.current.value };
    task.name && addTask(task);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className={styles.input}
        type='text'
        placeholder='Input your task!'
      />
    </form>
  );
});

export default TodoAdd;
