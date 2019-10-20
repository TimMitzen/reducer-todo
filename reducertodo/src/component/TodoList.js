import React from "react";
import Todo from "../component/Todo";
const TodoList = ({ todos, toggle }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} toggle={toggle} />
      ))}
    </ul>
  );
};

export default TodoList;
