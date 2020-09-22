import React, { useState } from "react";
import { State } from "../../react-app-env";

interface Props {
  todos: State;
}

interface LocalState {
  loading: boolean;
  todos: [];
}

const NotReadyTodos: React.FC<Props> = ({ todos }) => {
  const [state, setState] = useState<LocalState>({ loading: true, todos: [] });

  if (state.loading) {
    return null;
  }

  return null;
};

export default NotReadyTodos;
