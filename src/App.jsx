import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/browse" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:title" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </>
  );
}

export default App;
