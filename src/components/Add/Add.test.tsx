import React from "react";
import { render } from "@testing-library/react";
import Add from "./Add";

test("Render the Add component correctly", () => {
  const handlerFunc = () => console.log("hello");
  const { getByLabelText, getByText } = render(
    <Add value="" changeHandler={handlerFunc} />
  );
  getByLabelText(/todo/i);
  getByText(/add/i);
});
