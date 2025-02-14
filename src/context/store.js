import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";


const store = configureStore({
   reducer: ({
      // Add your reducers here
      books: booksReducer,
   }),
});

export default store;  