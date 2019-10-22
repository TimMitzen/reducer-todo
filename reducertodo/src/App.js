import React, { useReducer } from "react";

import TodoList from "./component/TodoList";
import { initialState, reducer } from "./reducers/todo";
import "./App.css";
import TodoTasks from "./component/TodoTasks";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleNewTodo(item) {
    dispatch({ type: "ADD_TODO", payload: item });
  }

  const changeItem = () => {
    console.log("fff");
    dispatch({ type: "DELETE_TODO" });
  };

  const toggle = id => {
    console.log(id);
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <div className="todo-container">
      <h1>To-do App</h1>
      <TodoList todos={state.todos} toggle={toggle} />
      <TodoTasks
        item={state.item}
        remove={changeItem}
        add={handleNewTodo}
        onChange={changeItem}
      />
    </div>
  );
}

export default App;
