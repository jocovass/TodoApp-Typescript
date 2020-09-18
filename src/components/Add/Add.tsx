import React from "react";

interface Props {
  value: string;
  changeHandler: () => void;
}

const Add: React.FC<Props> = () => (
  <div className="add">
    <form className="add__form">
      <div className="col">
        <input className="add__input" name="todo" id="todo" type="text" />
        <label className="add__label" htmlFor="todo">
          Enter a Todo...
        </label>
      </div>
      <button className="add__btn">Add</button>
    </form>
  </div>
);

export default Add;
