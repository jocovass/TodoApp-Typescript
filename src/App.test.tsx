import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import {
  cleanup,
  fireEvent,
  render as rtlRender,
} from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

interface IRenderParams {
  route: string | undefined;
  history: MemoryHistory<any>;
}
function render(
  ui: any,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  } = {} as IRenderParams
) {
  return {
    ...rtlRender(<Router history={history}>{ui}</Router>, renderOptions),
    history,
  };
}

test("render correctly", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/todo-notebook/i);
});

test("test the router", () => {
  const { getByTestId, getByText } = render(<App />);
  expect(getByTestId(/all/i)).toBeInTheDocument();
  const notReadyBTN = getByText(/not ready/i) as HTMLButtonElement;
  fireEvent.click(notReadyBTN);
  expect(getByTestId(/notready/i)).toBeInTheDocument();
  const doneBTN = getByText(/done/i) as HTMLButtonElement;
  fireEvent.click(doneBTN);
  expect(getByTestId(/done/i)).toBeInTheDocument();
});
