import { useState, useEffect } from "react";
import { db } from "../../data/firebase";
import {
  doc,
  collection,
  onSnapshot,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import style from "./App.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoCount from "../TodoCount/TodoCount";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const addTodo = async (text) => {
    await addDoc(collection(db, "todos"), { text, completed: false });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.globalContainer}>
      <div className={style.todoWrapper}>
        <h3 className={style.heading}>Todo App</h3>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
        {todos.length > 0 && <TodoCount count={todos.length} />}
      </div>
    </div>
  );
}

export default App;
