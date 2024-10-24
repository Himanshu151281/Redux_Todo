import { useState } from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice";
import "./AddForm.css"; // Import the CSS file

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
      evt.preventDefault();
      console.log(task);
      if(task){
        dispatch(addTodo(task));
        setTask("");
      } else{
        dispatch(addTodo(`Free Time`));
        setTask("");
      }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="add-form">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Enter a task"
          className="task-input" // Add a class for styling
        />
        <button className="add-button">Add Task</button>
      </form>
    </>
  );
}
