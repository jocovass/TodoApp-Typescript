import React, { useReducer } from "react";
import "./App.scss";
import Add from "./components/Add/Add";
import { Actions, State } from "./react-app-env";

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container" data-testid="todo-notebook">
      <Add updateState={dispatch} />
      <p>Input component</p>
      <p>Todos component</p>
      <p>Buttons / Filter component</p>
    </div>
  );
};

export default App;
