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
        <Link to="/add" className="hover:underline">
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// Here, we have created a simple Navbar component that contains a navigation bar with three links: Home, Browse Books, and Add Book.
// 4. Create the Home Component
// Next, we will create the Home component. This component will display a welcome message and a brief description of the application.
