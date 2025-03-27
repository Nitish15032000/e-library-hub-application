import { createSlice } from "@reduxjs/toolkit";
import books from '../assets/books.js';

const booksSlice = createSlice({
   name: "books",
   initialState: books,
   reducers: {
      addBook: (state, action) => {
         console.log("Reducer received book:", action.payload);
         state.push({ ...action.payload, id: state.length + 1 });
         console.log("Updated books state:", state);
      },
   },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
// import books from '../assets/books.js';  


// const booksSlice = createSlice({
//    name: "books",
//    initialState: books,
//    reducers: {
//       addBook: (state, action) => {
//          console.log("Reducer received book:", action.payload);
//          // state.push({ ...action.payload, id: state.length + 1 });
//          return [...state, { ...action.payload, id: state.length + 1 }];

//          console.log("Updated books state:", state);
//       },
//    },
// });

// export const { addBook } = booksSlice.actions;
// export default booksSlice.reducer;