import styles from './todo-app.module.css';
import React, { memo, useCallback, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TodoList from '../todo-list/todo-list';
import TodoAdd from '../todo-add/todo-add';

const TodoApp = memo((props) => {
  const [data, setData] = useState({
    tasks: {
      'task-1': { id: 'task-1', name: 'do1' },
      'task-2': { id: 'task-2', name: 'do2' },
      'task-3': { id: 'task-3', name: 'do3' },
    },
    tasksOrder: ['task-1', 'task-2', 'task-3'],
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.index === source.index) {
      return;
    }

    setData((data) => {
      const newTaskOrder = [...data.tasksOrder];
      newTaskOrder.splice(source.index, 1);
      newTaskOrder.splice(destination.index, 0, draggableId);

      const newData = {
        ...data,
        tasksOrder: newTaskOrder,
      };

      console.log(newData);

      return newData;
    });
  };

  const addTask = useCallback((task) => {
    setData((data) => {
      const newTasks = { ...data.tasks };
      newTasks[task.id] = { id: `${task.id}`, name: task.name };

      const newTasksOrder = [...data.tasksOrder];
      newTasksOrder.push(`${task.id}`);

      return { tasks: newTasks, tasksOrder: newTasksOrder };
    });
  }, []);

  const deleteTask = useCallback((task, index) => {
    setData((data) => {
      const newTasks = { ...data.tasks };
      delete newTasks[task.id];

      const newTasksOrder = [...data.tasksOrder];
      newTasksOrder.splice(index, 1);

      return { tasks: newTasks, tasksOrder: newTasksOrder };
    });
  }, []);

  return (
    <section className={styles.todoList}>
      <h1 className={styles.title}>to-do</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <TodoList data={data} deleteTask={deleteTask} />
      </DragDropContext>
      <TodoAdd addTask={addTask} />
    </section>
  );
});

export default TodoApp;
