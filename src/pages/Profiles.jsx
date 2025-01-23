import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]); // To store all profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]); // To store filtered profiles
  const [searchQuery, setSearchQuery] = useState(""); // To store the search input
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false); // To toggle suggestion visibility

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Accounts"); // Correct endpoint
        setProfiles(response.data);
        setFilteredProfiles(response.data); // Initialize filteredProfiles with all profiles
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profiles:", err);
        setError("Failed to load profiles. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleSearch = () => {
    // Filter profiles based on the search query
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  const handleKeyPress = (e) => {
    // Trigger search when Enter key is pressed
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchQueryChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value === "") {
      setFilteredProfiles(profiles); // If search is empty, reset to all profiles
      setShowSuggestions(false); // Hide suggestions when input is empty
    } else {
      handleSearch(); // Trigger search when text is entered
      setShowSuggestions(true); // Show suggestions
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name); // Auto-fill input with selected name
    setFilteredProfiles([suggestion]); // Show only the clicked suggestion's profile
    setShowSuggestions(false); // Hide suggestions after selection
  };

  if (loading) {
    return <p className="text-center mt-4 text-lg animate-pulse">Loading profiles...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 my-8">
      <h1 className="text-center text-3xl font-bold mb-6">Chartered Accountants Profiles</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-2 relative">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-300 text-black rounded-l-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Search profile..."
          value={searchQuery}
          onChange={handleSearchQueryChange} // Update search query and handle filtering
          onKeyDown={handleKeyPress} // Listen for the Enter key press
        />
        {/* Suggestions Dropdown */}
        {showSuggestions && searchQuery && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-300 rounded-lg max-h-60 overflow-auto w-1/2 z-10">
            {profiles
              .filter((profile) =>
                profile.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                  onClick={() => handleSuggestionClick(suggestion)} // Auto-fill input and trigger search
                >
                  {suggestion.name}
                </div>
              ))}
            {profiles.filter((profile) =>
              profile.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
              <div className="px-4 py-2 text-gray-500">No suggestions found.</div>
            )}
          </div>
        )}
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group  transform hover:scale-105 hover:shadow-xl group-hover:opacity-50 transition-opacity duration-300"
            >
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-48 object-cover group-hover:opacity-50 transition-opacity duration-300"
                />
              </div>
              <div className="p-4 flex flex-col">
                <h5 className="text-lg font-semibold mb-2 text-black">{profile.name}</h5>
                <p className="text-sm text-black mb-4">
                  {profile.intro.length > 60
                    ? `${profile.intro.slice(0, 60)}...`
                    : profile.intro}
                </p>
                <p className="text-sm mb-2 text-black">
                  <strong>Rating:</strong> {profile.rating} ⭐
                </p>
                <p className="text-sm mb-4 text-black">
                  <strong>Price:</strong> {profile.price}
                </p>
                <Link
                  to={`/details/${profile.id}`}
                  className="mt-auto text-center bg-blue-500 text-white px-4 py-2 rounded group-hover:bg-blue-600 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-600">No profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default Profiles;
