import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {

  const deleteHandler = (todo) => {
    setTodos(todos.filter(item => {
      return item.id !== todo.id;
    })) 
  }

  const isDoneHandler = (todo) => {
    const newTodos = todos.map(item => {
      if (item.id === todo.id) {
        item.isDone = !item.isDone
      }
      return item;
    });
    return setTodos(newTodos);
  };

  return (
    <li
      className={todo.isDone ? 'done' : ''}>
        {todo.text}
        <span className="remove" onClick={() => deleteHandler(todo)}>×</span>
        <span className="check" onClick={() => isDoneHandler(todo)}>✔︎</span>
    </li>
  )
}

export default Todo;