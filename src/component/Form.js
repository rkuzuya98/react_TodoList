import React from 'react';

const Form = ({ todos, setTodos, inputText, setInputText }) => {

  const inputTextHander = (e) => {
    setInputText(e.target.value)
  }

  const submitTextHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {id: Math.random() * 1000, text: inputText, isDone: false}]);
    setInputText('');
  }

  return (
    <form>
      <input type="text" placeholder="ここに入力" value={inputText} onChange={inputTextHander} />
      <button type="submit" onClick={submitTextHandler}>+</button>
    </form>
  );
}

export default Form;
