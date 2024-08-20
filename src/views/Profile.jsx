import React, { useState } from "react";
import Logo from "./Logo";

export default function Profile() {
  const [profilePicture, setProfilePicture] = useState(() => localStorage.getItem("profilePicture") || '');
  const user = localStorage.getItem("user") || "Guest";
  const email = localStorage.getItem("emailStored") || "example@example.com";

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Save the image to localStorage
      localStorage.setItem("profilePicture", reader.result);
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gradient-to-r  from-[#2c3e50] to-[#4ca1af] p-6 text-white rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 mb-4">
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          )}
        </div>
        <div className="text-center">
          <b className="text-xl font-semibold">{user}</b>
          <p className="text-sm text-gray-300 flex items-center justify-center mt-2">
            <i className="fa-solid fa-envelope mr-2"></i>
            {email}
          </p>
          <p className="text-sm text-gray-300 flex items-center justify-center mt-1">
            <i className="fa-solid fa-location-dot mr-2"></i> New York, USA
          </p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="profile-picture-upload"
            className="cursor-pointer text-blue-400 flex items-center justify-center"
          >
            <i className="fa-solid fa-upload mr-2"></i> Choose Picture
          </label>
          <input
            id="profile-picture-upload"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
        <a href="/home" className="mt-6 inline-block">
          <Logo/>
        </a>
      </div>
    </div>
  );
}
