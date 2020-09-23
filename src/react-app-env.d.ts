/// <reference types="react-scripts" />

export interface Todo {
  text: string;
  id: number;
  done: boolean;
}

export type Actions =
  | {
      type: "setInitialState";
      payload: { todos: Todop[] };
    }
  | {
      type: "add";
      payload: {
        text: string;
        id: number;
        done: boolean;
      };
    }
  | { type: "remove"; payload: { id: number } }
  | { type: "done"; payload: { id: number } };

export type State = Todo[];
