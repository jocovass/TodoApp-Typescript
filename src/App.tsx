import React, { useReducer, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Add from "./components/Add/Add";
import Todos from "./components/Todos/Todos";
import { Actions, State } from "./react-app-env";
import Filter from "./components/Filtier/Filter";
import NotReadyTodos from "./components/Todos/NotReadyTodos";
import DoneTodos from "./components/Todos/DoneTodos";

import "./App.scss";

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "setInitialState":
      return action.payload.todos;
    case "add":
      return [action.payload, ...state];
    case "remove":
      console.log(action);
      state = state.filter((el) => el.id !== action.payload.id);
      return state;
    case "done":
      state.map((el) => {
        if (el.id === action.payload.id) {
          el.done = !el.done;
        }
        return el;
      });
      return [...state];
    default:
      throw Error("Unhandled 💥");
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos") as any) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  return (
    <div className="container" data-testid="todo-notebook">
      <div className="main">
        <Add updateState={dispatch} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Todos todos={state} updateState={dispatch} />}
          />
          <Route
            path="/not-ready"
            render={() => (
              <NotReadyTodos todos={state} updateState={dispatch} />
            )}
          />
          <Route
            path="/all-done"
            render={() => <DoneTodos todos={state} updateState={dispatch} />}
          />
        </Switch>
      </div>

      <Filter />
    </div>
  );
};

export default App;
