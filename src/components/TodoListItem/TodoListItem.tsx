import React from "react";
import { Todo, Actions } from "../../react-app-env";

interface Props {
  todo: Todo;
  updateState: React.Dispatch<Actions>;
}
const TodoListItem: React.FC<Props> = ({ todo, updateState }) => {
  const handelCheckToggle = (id: number) => {
    updateState({ type: "done", payload: { id } });
  };
  const handleDeleteClick = (id: number) => {
    updateState({ type: "remove", payload: { id } });
  };
  return (
    <li className={`todos__item `} data-testid="todo-item" key={todo.id}>
      <div
        data-testid="todo-check-input"
        role="button"
        aria-label="Check input"
        tabIndex={0}
        onClick={handelCheckToggle.bind(null, todo.id)}
        className={`todos__checkmark ${todo.done ? "checked" : ""}`}
      >
        <span
          className={`todos__checkmark--stem ${todo.done ? "checked" : ""}`}
        ></span>
        <span
          className={`todos__checkmark--kick ${todo.done ? "checked" : ""}`}
        ></span>
      </div>
      <p className={` todos__text ${todo.done ? "checked" : ""}`}>
        {todo.text}
      </p>
      <button
        onClick={handleDeleteClick.bind(null, todo.id)}
        className="todos__delete"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;
