import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AddBook from "./pages/AddBook";
import BrowseBooks from "./pages/BrowseBooks";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";

function App() {

  const [state, setstate] = useState();
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowseBooks />} />
        <Route path="/browse/:category" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:title" element={<BookDetails />} />
        <Route path="/addbook" element={<AddBook />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
