export default function SearchBar({ onSearch }) {
  
  return (
    <input
      type="text"
      id="id"// Add this
      name="author" // Add this
      placeholder="Search by title or author"
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-lg"
    />
  );
}
