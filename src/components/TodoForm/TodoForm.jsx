import style from "./TodoForm.module.css";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    } else {
      alert("Please enter a valid todo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Add Todo"
      />
      <button className={style.buttonAdd}>Add</button>
    </form>
  );
};

export default TodoForm;
