import React from 'react';
const TodoTasks =({item, handleCompleted,changeItem, handleNewTodo})=>{
<form onSubmit={handleCompleted}>
<button onClick={changeItem}>Remove</button>
<button onClick={handleNewTodo}>Add</button>
</form>
}

export default TodoTasks;

