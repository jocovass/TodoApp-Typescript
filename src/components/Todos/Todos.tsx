import React from "react";
import * as ReactCSSTransitionGroup from "react-transition-group";
import { State, Actions } from "../../react-app-env";

interface Props {
  todos: State;
  updateState: React.Dispatch<Actions>;
}
const Todos: React.FC<Props> = ({ todos, updateState }) => {
  const handelCheckToggle = (id: number) => {
    updateState({ type: "done", payload: { id } });
  };
  const handleDeleteClick = (id: number) => {
    updateState({ type: "remove", payload: { id } });
  };
  return (
    <div className="todos">
      <ul className="todos__list">
        <ReactCSSTransitionGroup.TransitionGroup>
          {todos.map((todo) => {
            return (
              <ReactCSSTransitionGroup.CSSTransition
                key={todo.id}
                timeout={300}
                classNames="slideIn"
              >
                <li className={`todos__item `} data-testid="todo-item">
                  <div
                    data-testid="todo-check-input"
                    role="button"
                    aria-label="Check input"
                    tabIndex={0}
                    onClick={handelCheckToggle.bind(null, todo.id)}
                    className={`todos__checkmark ${todo.done ? "checked" : ""}`}
                  >
                    <span
                      className={`todos__checkmark--stem ${
                        todo.done ? "checked" : ""
                      }`}
                    ></span>
                    <span
                      className={`todos__checkmark--kick ${
                        todo.done ? "checked" : ""
                      }`}
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
              </ReactCSSTransitionGroup.CSSTransition>
            );
          })}
        </ReactCSSTransitionGroup.TransitionGroup>
      </ul>
    </div>
  );
};

export default Todos;
