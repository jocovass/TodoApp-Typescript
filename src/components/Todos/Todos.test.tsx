import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import Todos from "./Todos";

afterEach(cleanup);

const todos = [{ text: "Go for shopping", id: 0, done: true }];
const handler = jest.fn();

test("render corectly", () => {
  const { getByText, getAllByTestId } = render(
    <Todos todos={todos} updateState={handler} />
  );
  getAllByTestId("todo-item");
  getAllByTestId("todo-check-input");
  getByText(todos[0].text);
  getByText(/delete/i);
});

test("the handler functions get called", () => {
  const { getByText } = render(<Todos todos={todos} updateState={handler} />);
  fireEvent.click(getByText(/delete/i));
  expect(handler).toHaveBeenCalledTimes(1);

  fireEvent.click(getByText(todos[0].text));
  expect(handler).toHaveBeenCalledTimes(1);
});
