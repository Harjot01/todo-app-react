// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default store;
