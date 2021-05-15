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
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} type='text' />
    </form>
  );
});

export default TodoAdd;
