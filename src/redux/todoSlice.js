// src/redux/todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  todos: [],
};

// Create a slice of the state
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.text = text;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// Export actions
export const { addTodo, removeTodo, editTodo, toggleTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
