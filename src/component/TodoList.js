import React from 'react';

import Todo from './Todo'

const TodoList = ({ todos, setTodos, filter }) => {
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !todo.isDone;
    if (filter === 'DONE') return todo.isDone;
  })


  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;