import React, { useContext } from 'react';
import { SidebaContext } from '../../views/Discover';

export default function Price() {
  const { priceRange, setPriceRange } = useContext(SidebaContext);

  const priceRanges = [
    { label: "$0 - $200", min: 0, max: 200 },
    { label: "$200 - $500", min: 200, max: 500 },
    { label: "$500 - $1000", min: 500, max: 1000 },
    { label: "$1000 - $2000", min: 1000, max: 2000 },
    { label: "$2000 - $5000", min: 2000, max: 5000 }
  ];

  const handlePriceRanges = (e, range) => {
    const { checked } = e.target;

    if (checked) {
      setPriceRange([...priceRange, { min: range.min, max: range.max }]);
    } else {
      setPriceRange(
        priceRange.filter(price => price.min !== range.min && price.max !== range.max)
      );
    }
  };

  return (
    <div className="container mb-6 flex flex-col w-full sm:w-72 h-auto rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden">
      <h2 className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-t-lg text-lg tracking-wide">
        Your Budget Per Day
      </h2>
      <div className="flex flex-col space-y-3 px-6 py-4">
        {priceRanges.map((range, index) => (
          <label key={index} className="flex items-center cursor-pointer">
            <input
              className="h-5 w-5 rounded-md border-2 border-gray-400 text-indigo-600 focus:ring-indigo-500 focus:outline-none transition-colors duration-150 ease-in-out"
              type="checkbox"
              onChange={(e) => handlePriceRanges(e, range)}
              checked={priceRange.some(price => price.min === range.min && price.max === range.max)}
            />
            <span className="ml-3 text-sm text-gray-700 font-medium">
              {range.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
