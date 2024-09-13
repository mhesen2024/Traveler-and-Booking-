import React, { useState, useContext } from "react";
import { SidebaContext } from "../../views/Discover";

export default function Rating() {
  const { setRatingRange } = useContext(SidebaContext);
  const [activeRating, setActiveRating] = useState(null);
  const handleClick = (rating) => {
    setActiveRating(rating);
    setRatingRange(rating);    
  };

  return (
    <div className="container flex flex-col w-full sm:w-72 h-auto rounded-lg border border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <h2 className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-t-lg text-lg tracking-wide">
        Rating
      </h2>
      <p className="px-6 py-3 text-sm text-gray-700 font-medium">
        Show only ratings more than
      </p>
      <div className="flex justify-between px-6 py-4">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            value={rating}
            onClick={() => handleClick(rating)}
            className={`flex items-center justify-center border border-gray-300 hover:border-yellow-400 p-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              activeRating === rating
                ? "bg-yellow-200 text-white"
                : "hover:bg-yellow-100"
            }`}
          >
            {rating}
            <i className="fa-solid fa-star text-yellow-400 ml-1"></i>
          </button>
        ))}
      </div>
    </div>
  );
}
