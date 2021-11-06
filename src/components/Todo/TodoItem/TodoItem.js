import TodoList from '../TodoList/TodoList';
import './TodoItem.css';

const TodoItem = (props) => {
  let localeStore = JSON.parse(localStorage.getItem('info')) || [];

  return (
    <ul className="todo-list">
      {localeStore.map((todo) => {
        console.log(todo.text);
        return (
          <TodoList key={todo.id} id={todo.id} date={todo.date}>
            {todo.text}
          </TodoList>
        );
      })}
    </ul>
  );
};

export default TodoItem;
