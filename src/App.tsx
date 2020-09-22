import React, { useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Add from "./components/Add/Add";
import Todos from "./components/Todos/Todos";
import { Actions, State } from "./react-app-env";
import Filter from "./components/Filtier/Filter";

import "./App.scss";
import NotReadyTodos from "./components/Todos/NotReadyTodos";
import DoneTodos from "./components/Todos/DoneTodos";

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
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
const IS = [
  { text: "Go for shopping", id: 0, done: true },
  { text: "Finish study", id: 1, done: false },
  { text: "Do the laundry", id: 2, done: false },
  { text: "Make dinner", id: 3, done: false },
];

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, IS);
  return (
    <BrowserRouter>
      <div className="container" data-testid="todo-notebook">
        <div className="main">
          <Add updateState={dispatch} />
          <Route
            path="/all"
            exact
            render={() => <Todos todos={state} updateState={dispatch} />}
          />
          <Route
            path="/not-ready"
            exact
            render={() => (
              <NotReadyTodos todos={state} updateState={dispatch} />
            )}
          />
          <Route
            path="/done"
            exact
            render={() => <DoneTodos todos={state} updateState={dispatch} />}
          />
        </div>
        <Filter />
      </div>
    </BrowserRouter>
  );
};

export default App;
