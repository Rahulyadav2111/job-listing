function SearchBar({ setSearchLocation }) {
    const handleInputChange = (e) => {
      setSearchLocation(e.target.value);
    };
  
    return (
      <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg rounded-lg flex flex-col md:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="flex-1 w-full md:w-auto">
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Enter cities (e.g., Hyderabad, Bengaluru)"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition bg-white text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
          />
        </div>
      </div>
    );
  }
  
  export default SearchBar;