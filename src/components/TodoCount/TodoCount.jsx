import style from "./TodoCount.module.css";

const TodoCount = ({ count }) => {
  return <p className={style.count}>You have {count} tasks</p>;
};

export default TodoCount;
