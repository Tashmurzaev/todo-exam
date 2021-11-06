import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import './TodoInput.css';

const TodoInput = (props) => {
  const [addTodo, setAddTodo] = useState('');
  const [addDate, setAddDate] = useState('');
  const [error, setError] = useState();

  const userChangeHandler = (e) => {
    setAddTodo(e.target.value);
    console.log(addTodo);
  };

  const userChangeDate = (e) => {
    setAddDate(e.target.value);
    console.log(addDate);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (addTodo.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please fill it out correctly',
      });
      return;
    }

    props.onAddTodo(addTodo, addDate);

    setAddTodo('');
    setAddDate('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="blog">
        <form onSubmit={formSubmitHandler}>
          <div className="main-form">
            <input type="text" onChange={userChangeHandler} value={addTodo} />
            <input type="date" onChange={userChangeDate} value={addDate} />
            <Button className="button" type="submit">
              Add Todo
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoInput;
