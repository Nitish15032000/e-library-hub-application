import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../context/booksSlice";

const Categories = [
  "Dystopian", "Political Fiction", "Classic", "Science Fiction",
  "Fiction", "Non-Fiction", "Biography", "Fantasy", "Mystery",
  "Horror", "Thriller", "Romance", "Self-Help", "Cooking",
  "Travel", "History", "Art", "Poetry", "Religion", "Humor",
  "Children", "Young Adult", "Graphic Novel", "Manga", "Comics", "Other"
];

const Languages = [
  "English", "Spanish", "French", "German", "Chinese",
  "Japanese", "Russian", "Arabic", "Portuguese", "Other"
];

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    country: "",
    genres: [],
    language: "English",
    imageLink: "",
    link: "",
    pages: "",
    rating: "",
    year: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentGenre, setCurrentGenre] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenreAdd = () => {
    if (currentGenre && !formData.genres.includes(currentGenre)) {
      setFormData({
        ...formData,
        genres: [...formData.genres, currentGenre]
      });
      setCurrentGenre("");
    }
  };

  const handleGenreRemove = (genreToRemove) => {
    setFormData({
      ...formData,
      genres: formData.genres.filter(genre => genre !== genreToRemove)
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, imageLink: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newBook = {
      ...formData,
      id: Date.now(),
      pages: parseInt(formData.pages),
      rating: parseFloat(formData.rating),
      year: parseInt(formData.year)
    };

    dispatch(addBook(newBook));
    navigate("/browse");
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Genres */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Genres</label>
          <div className="flex gap-2 mb-2">
            <select
              value={currentGenre}
              onChange={(e) => setCurrentGenre(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select a genre</option>
              {Categories.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleGenreAdd}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.genres.map((genre, index) => (
              <span key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                {genre}
                <button
                  type="button"
                  onClick={() => handleGenreRemove(genre)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            {Languages.map((lang, index) => (
              <option key={index} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        {/* Pages */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pages</label>
          <input
            type="number"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating (0-5)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Publication Year</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min="1800"
            max={new Date().getFullYear()}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

    

        {/* Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Wikipedia Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="https://en.wikipedia.org/wiki/Book_Title"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          {imagePreview && (
            <div className="mt-2 flex justify-center">
              <img
                src={imagePreview}
                alt="Book preview"
                className="h-40 object-contain border rounded"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
            isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Adding Book...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default AddBook;