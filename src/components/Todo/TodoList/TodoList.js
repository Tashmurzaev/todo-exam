import './TodoList.css';
import Dates from '../Date/Date';

const TodoList = (props) => {
  const onDone = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      e.target.parentElement.classList.add('done');
    } else {
      e.target.parentElement.classList.remove('done');
    }
  };

  return (
    <div className="block">
      <li className="todo-item">
        {props.children} <Dates date={props.date} />
        <input type="checkbox" onClick={onDone} />
      </li>
    </div>
  );
};

export default TodoList;
