import React, { useState } from "react";

const TodoTasks = ({ item, remove, onChange, add }) => {
  const [newItem, setNewItem] = useState("");
  const handleInput = event => setNewItem(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    add(newItem);
    setNewItem("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={handleInput} />
        <button type="submit">Add</button>
        <button onClick={remove}>Remove</button>
      </form>
    </>
  );
};

export default TodoTasks;
