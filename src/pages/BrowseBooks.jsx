import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Books from Redux:", books);

  const filteredBooks = books.filter(
    (book) =>
      book.category === category &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Browse {category} Books</h1>
        <SearchBar onSearch={setSearchQuery} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book}  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;