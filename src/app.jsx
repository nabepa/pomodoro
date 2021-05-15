import React from 'react';
import './app.moduel.css';
import Timmer from './components/timmer/timmer';
import TodoList from './components/todo-list/todo-list';

function App() {
  return (
    <div>
      <Timmer />
      <TodoList />
    </div>
  );
}

export default App;
