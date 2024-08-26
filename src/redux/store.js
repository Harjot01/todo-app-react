// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
