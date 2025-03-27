import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { title } = useParams(); // Get title from URL
  const book = useSelector((state) =>
    state.books.find((book) => book.title.toLowerCase() === title.toLowerCase())
  );

  if (!book) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Book Not Found!
          </h1>
          <Link to="/browse" className="text-blue-500 hover:underline">
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex h-screen items-center justify-center bg-gray-50 p-6">
        <div className="bg-white shadow-lg rounded-lg max-w-md p-6">
          <img
            src={book.imageLink}
            alt={book.title}
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {book.title}
          </h1>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Country:</span> {book.country}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Language:</span> {book.language}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Pages:</span> {book.pages}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Published:</span> {book.year}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Rating:</span> ⭐ {book.rating}
          </p>

          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mt-4"
          >
            More Info
          </a>
          <Link
            to="/browse"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}
