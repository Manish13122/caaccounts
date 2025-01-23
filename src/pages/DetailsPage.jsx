import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const { id } = useParams(); // Get the profile ID from the URL
  const navigate = useNavigate(); // Navigation hook
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out effect

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Accounts/${id}`);
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile details:", err);
        setError("Failed to load profile details. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  const handleClose = () => {
    setFadeOut(true); // Trigger fade-out before navigation
    setTimeout(() => {
      navigate(-1); // Navigate back after fade-out
    }, 300); // Wait for 300ms (duration of fade-out)
  };

  if (loading) {
    return <p className="text-center mt-4 text-lg animate-pulse">Loading profile details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  return (
    <div className={`container mx-auto px-4 my-8 transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative bg-white shadow-md rounded-lg max-w-md mx-auto p-6">

        {/* Close Icon */}
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 p-2 text-black text-xl hover:text-red-500 transition"
        >
          &#10005; {/* Close icon (X) */}
        </button>

        {/* Profile Details */}
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-48 object-cover rounded-md mb-6 transition-transform duration-300 transform hover:scale-105"
        />
        <h1 className="text-2xl font-bold text-black text-center mb-4 hover:text-blue-500 transition-colors duration-300">{profile.name}</h1>
        <p className="text-black mb-4">{profile.intro}</p>
        <p className="text-black mb-2">
          <strong>Rating:</strong> {profile.rating} ⭐
        </p>
        <p className="text-black mb-2">
          <strong>Price:</strong> {profile.price}
        </p>
        <p className="text-black mb-2">
          <strong>Description:</strong> {profile.about?.description || "N/A"}
        </p>
        <p className="text-black mb-2">
          <strong>Services:</strong> {profile.about?.services?.join(", ") || "N/A"}
        </p>
        <p className="text-black mb-4">
          <strong>Benefits:</strong> {profile.about?.benefits?.join(", ") || "N/A"}
        </p>

        {/* Back Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleClose}
            className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            &larr; Back to Profiles
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
