import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCom from './ClasCom';
import TodoList from './Todolist';

function App() {
  return (
    <div className='App'>
      <h1 style={{ backgroundColor: 'white' }}>Hello React</h1>
      <TodoList />
    </div>
  );
}

export default App;
