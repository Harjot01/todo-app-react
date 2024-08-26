// src/redux/localStorageMiddleware.js

export const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
  
    // Save the state to local storage after the action is processed
    if ([
      "todos/addTodo",
      "todos/removeTodo",
      "todos/editTodo",
      "todos/toggleTodo"    
    ].includes(action.type)) {
      const todos = store.getState().todos.todos;
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
    return result;
  };
  