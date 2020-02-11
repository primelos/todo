import React, { useContext } from "react";
import { TodoContext } from '../context'


const Todos = () => {
    const { todo, index, completeTodo, removeTodo} = useContext(TodoContext)
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : null }}
    >
      {todo.text}
      <div>
        <button
          className="todo-functions completed"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="todo-functions remove"
          onClick={() => removeTodo(index)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Todos;
