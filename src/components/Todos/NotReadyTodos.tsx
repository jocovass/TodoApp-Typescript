import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { State, Actions } from "../../react-app-env";
import TodoListItem from "../TodoListItem/TodoListItem";

interface Props {
  todos: State;
  updateState: React.Dispatch<Actions>;
}

const NotReadyTodos: React.FC<Props> = ({ todos, updateState }) => {
  return (
    <div className="todos">
      <ul className="todos__list">
        <TransitionGroup component={null}>
          {todos.map((todo) => {
            if (!todo.done) {
              return (
                <CSSTransition timeout={300} classNames="slideIn" key={todo.id}>
                  <TodoListItem todo={todo} updateState={updateState} />
                </CSSTransition>
              );
            } else {
              return null;
            }
          })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default NotReadyTodos;
