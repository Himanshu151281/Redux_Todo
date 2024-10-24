import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import "./Todo.css"; // Import the CSS file

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  // console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-container">
      <AddForm />
      <h2>Todos</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.task}
            <button className="delete-button" onClick={() => clickHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}