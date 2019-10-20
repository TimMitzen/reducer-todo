export const initialState = {
  todos: [{ item: "Learn about reducers", completed: false, id: 3892987589 }]
};

export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_TODO":
      return {
        ...state,
        item: action.payload
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    default:
      return state;
  }
}
