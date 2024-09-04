import React, { useState } from 'react';

export default function Price({ onPriceChange }) {
  const priceRanges = [
    { label: "$0 - $200", min: 0, max: 200 },
    { label: "$200 - $500", min: 200, max: 500 },
    { label: "$500 - $1000", min: 500, max: 1000 },
    { label: "$1000 - $2000", min: 1000, max: 2000 },
    { label: "$2000 - $5000", min: 2000, max: 5000 }
  ];

  const handlePriceChange = (range) => {
    onPriceChange(range.min, range.max);
  };

  return (
    <div className="container mb-[15px] flex flex-col w-full sm:w-72 h-[270px] rounded-md border-2 border-gray-300 space-y-4 overflow-hidden">
      <h2 className="bg-gray-200 text-gray-900 font-medium py-4 px-4 rounded-t-md">
        Your budget per day
      </h2>
      {priceRanges.map((range, index) => (
        <label key={index} className="flex items-center px-4">
          <input
            className="h-5 w-5 rounded-md border-2 border-gray-300"
            type="checkbox"
            onChange={() => handlePriceChange(range)}
          />
          <span className="ml-2 text-sm">{range.label}</span>
        </label>
      ))}
    </div>
  );
}
