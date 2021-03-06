import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import Filter from "./Filter";

test("render correctly", () => {
  const { getByText } = render(
    <Router history={createMemoryHistory()}>
      <Filter />
    </Router>
  );
  getByText(/all todo/i);
  getByText(/not ready/i);
  getByText(/done/i);
});
