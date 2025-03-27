import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 text-center">
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;