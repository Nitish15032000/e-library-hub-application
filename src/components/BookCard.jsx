import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    // console.log(book);
  return (
    <div className="p-4 border rounded">
      <img src={book.imageLink} alt={book.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="font-bold text-lg">{book.title}</h3>
      <p className="text-sm">by {book.author}</p>
      <Link
        to={`/book/${book.title}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Details
      </Link>
    </div>
  );
};
export default BookCard;
