import './App.css';
import React, { useState } from 'react';

import Form from './component/Form'
import TodoList from './component/TodoList'
import Filter from './component/Filter';

function App() {

  const [filter, setFilter] = useState('ALL');
  const [inputText, setInputText] = useState('')

  const [todos, setTodos] = useState([
    {id: 0, text: "Sample 1", isDone: false},
    {id: 1, text: "Sample 2", isDone: true},
    {id: 2, text: "Sample 3", isDone: false},
  ]);

  

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos = {setTodos} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} setTodos = {setTodos} filter={filter} />
    </div>
  );
}

export default App;
