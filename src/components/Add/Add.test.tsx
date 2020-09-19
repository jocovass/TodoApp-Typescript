import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Add from "./Add";

afterEach(cleanup);

test("render correctly", () => {
  const handler = jest.fn();
  const { getByLabelText, getByText } = render(<Add updateState={handler} />);
  // query the TODO input, using the label "for"
  getByLabelText(/todo/i);
  // query the button by its text content
  getByText(/add/i);
});

describe("Testing Add component functionality", () => {
  test("The input value on initial render", () => {
    const handler = jest.fn();
    const { getByLabelText } = render(<Add updateState={handler} />);
    // assert that the input value is empty initially
    expect((getByLabelText(/todo/i) as HTMLInputElement).value).toEqual("");
  });

  test("Submiting with empty input value, expect ERROR", () => {
    const handler = jest.fn();
    const { getByText, getByTestId } = render(<Add updateState={handler} />);
    // click the button
    fireEvent.click(getByText(/add/i));
    // without input value we are going to render error
    expect(getByTestId("error")).toHaveTextContent(/field is required/i);
  });

  test("Update input value and submit the form", () => {
    const inputValue = "Going to play tennis";
    const handler = jest.fn();
    const { getByLabelText, getByText } = render(<Add updateState={handler} />);
    const input = getByLabelText(/todo/i) as HTMLInputElement;
    // uptade the input value
    fireEvent.change(input, { target: { value: inputValue } });
    // assert that the input value is empty initially
    expect(input.value).toEqual(inputValue);
    fireEvent.click(getByText(/add/i));
    // check the handler function return data that will be saved in the database
    expect(handler).toBeCalledTimes(1);
  });
});
