function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 flex items-center justify-center">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-black p-2 border rounded-md shadow-md w-64 md:w-96"
      />

      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
