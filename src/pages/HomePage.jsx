import React from "react";
import welcomeImage from "../assets/library-dark-0.jpg";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const books = useSelector((state) => state.books);

  const popularBooks = books.filter((book) => book.rating >= 4.8);

  return (
    <>
      <div className="relative w-full h-[25vh]">
        {/* Background Image */}
        <img
          src={welcomeImage}
          alt="Welcome"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <h1 className="text-cyan-400 text-3xl md:text-5xl font-bold">
            Welcome to Our Library
          </h1>
        </div>
      </div>
      

      <hr className=" border-1 border-blue-900" />
      <h1 className="text-blue-950 text-2xl md:text-5xl font-bold">
        Popular Books
      </h1>
      <hr className=" border-1 border-blue-900" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
        {popularBooks.map((book) => (
          <BookCard key={book.pages} book={book} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
