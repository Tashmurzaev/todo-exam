import React, { useState } from 'react';
import TodoItem from './components/Todo/TodoItem/TodoItem';

import TodoInput from './components/Todo/TodoInput/TodoInput';

function App() {
  const [todoGoals, setTodoGoals] = useState([]);

  const addTodoHandler = (addTodo, addDate) => {
    setTodoGoals((prevTodo) => {
      let updateTodo = [...prevTodo];
      updateTodo = JSON.parse(localStorage.getItem('info')) || [];

      updateTodo.unshift({
        text: addTodo,
        id: Math.random().toString(),
        date: addDate,
      });
      localStorage.setItem('info', JSON.stringify(updateTodo));

      return updateTodo;
    });
  };
  console.log(todoGoals);

  return (
    <div>
      <TodoInput onAddTodo={addTodoHandler} />
      <TodoItem data={todoGoals} />
    </div>
  );
}

export default App;
