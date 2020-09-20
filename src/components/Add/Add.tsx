import React, { useState } from "react";
import { Actions } from "../../react-app-env";

interface Props {
  updateState: React.Dispatch<Actions>;
}

const Add: React.FC<Props> = ({ updateState }) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }
    setValue(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      // prevent the subbmition if the input is empty
      setError(true);
    } else {
      // add todo to the State
      console.log(value);
      updateState({
        type: "add",
        payload: { text: value, id: Date.now(), done: false },
      });
      setValue("");
    }
  };
  return (
    <div className="add">
      <form className="add__form" onSubmit={submitHandler}>
        <div className="col">
          <input
            onChange={changeHandler}
            className={`add__input ${error ? "add__input--error" : ""}`}
            name="todo"
            id="todo"
            type="text"
            value={value}
            placeholder=" "
          />
          <label className="add__label" htmlFor="todo">
            Enter a Todo...
          </label>
          {error ? (
            <div className="tooltip" data-testid="error">
              <span className="tooltip__triangle"></span>
              This field is required.
            </div>
          ) : null}
        </div>
        <button className="add__btn">Add</button>
      </form>
    </div>
  );
};

export default Add;
