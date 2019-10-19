import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/todo";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input placeholder={state.item} />
    </div>
  );
};

export default TodoList;
