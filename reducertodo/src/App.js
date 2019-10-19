import React ,{ useState, useReducer } from 'react';
import Todo from './component/Todo'
import TodoList from'./component/TodoList'
import {todo, initialState, reducer} from './reducers/todo'
import './App.css';
import TodoTasks from'./component/TodoTasks'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  function handleNewTodo(event){
    event.preventDefault();
    dispatch({type: 'ADD_TODO', payload: state.item})
    
 }
const  handleCompleted = (event) => {
 event.preventDefault();
 dispatch({type: 'COMPLETED_TODO' })


 }

 const changeItem =(event) =>
    dispatch({type: 'CHANGE_TODO', payload: event.target.value})
 


 const toggle = id => dispatch({ type: 'TOGGLE', payload: id})
  
  return (
    <div className="todo-container">
    <h1>Todo App</h1>
    <Todo />
    <todo />
    <TodoList todos={state.todos} toggle={toggle}/>
    <TodoTasks />

    </div>
  );
}

export default App;
