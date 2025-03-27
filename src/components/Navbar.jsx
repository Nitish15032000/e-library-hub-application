import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">Online Library</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/browse" className="hover:underline">
          Browse Books
        </Link>
        <Link to="/addbook" className="hover:underline">
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;