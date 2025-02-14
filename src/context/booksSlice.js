import { createSlice } from "@reduxjs/toolkit";
// import { books } from "../assets/books";
import books from '../assets/books.js';  // ✅ CORRECT


const booksSlice = createSlice({
   name: "books",
   initialState: books,
   reducers: {
      // Add your reducers here
   },
});

export default booksSlice.reducer;