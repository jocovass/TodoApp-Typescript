import React from "react";
import "./App.scss";
import Add from "./components/Add/Add";

const App: React.FC = () => {
  return (
    <div className="container" data-testid="todo-notebook">
      <Add value="" changeHandler={() => console.log("hello")} />
      <p>Input component</p>
      <p>Todos component</p>
      <p>Buttons / Filter component</p>
    </div>
  );
};

export default App;
