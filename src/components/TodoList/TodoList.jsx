import TodoItem from "../TodoItem/TodoItem";
import style from "./TodoList.module.css";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className={style.tasksList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
