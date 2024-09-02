import React, { useContext, useState } from 'react';

import CountryImage from '../atoms/CountryImage';

export default function CountryCard({ countries }) {
  // State to toggle description visibility
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  // Toggle description visibility on card click
  const handleCardClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
    console.log(countries.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer rounded-xl shadow-lg border overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <CountryImage src={countries.imageUrl} alt={countries.name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold capitalize">{countries.name}</h3>

        {/* Conditionally render description */}
        {isDescriptionVisible && (
          <p className="text-gray-600 mt-2">
            {countries.description || 'No description available.'}
          </p>
        )}
      </div>
    </div>
  );
}
