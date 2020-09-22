import React, { useReducer } from "react";
import Add from "./components/Add/Add";
import Todos from "./components/Todos/Todos";
import DoneTodos from "./components/Todos/DoneTodos";
import NotReadyTodos from "./components/Todos/NotReadyTodos";
import { Actions, State } from "./react-app-env";
import Filter from "./components/Filtier/Filter";

import "./App.scss";

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
    <div className="container" data-testid="todo-notebook">
      <div className="main">
        <Add updateState={dispatch} />
        <Todos todos={state} updateState={dispatch} />
      </div>
      <Filter />
    </div>
  );
};

export default App;
