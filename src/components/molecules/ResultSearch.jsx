import React from 'react';
import HotelImage from '../../asserts/PNG/Hotel.png'; 
import Star from '../../asserts/PNG/star.png'; 
import HalfStar from '../../asserts/PNG/halfstar.png';

const ResultSearch = () => {
    return (
      <div className="flex bg-white shadow-md p-4 rounded-md overflow-hidden w-full max-w-4xl border border-gray-200 mt-[304px]">
        {/* Left: Hotel Image */}
        <img
          src={HotelImage}
          alt="Hotel"
          className="w-1/3 object-cover"
        />
        
        {/* Right: Details */}
        <div className="flex-1 p-4 ">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">Lakeside Motel Waterfront</h2>
              <div className="flex items-center mt-2">
                <img src={Star} alt="Star" className="h-4 w-4"/>
                <img src={Star} alt="Star" className="h-4 w-4"/>
                <img src={Star} alt="Star" className="h-4 w-4"/>
                <img src={Star} alt="Star" className="h-4 w-4"/>
                <img src={HalfStar} alt="Half Star" className="h-4 w-4"/>
                <span className="ml-2 text-sm text-gray-600">4.5 (1200 Reviews)</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Live a little and celebrate with champagne. <br />
                Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.
              </p>
            </div>
            <div className="flex flex-col items-end">
              <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md mb-2">
                Book now and receive 15% off
              </button>
              <div className="flex items-center text-green-600 text-sm">
                <span>5% off</span>
              </div>
            </div>
          </div>
          
          {/* See Availability Button */}
          <div className="flex justify-between items-center mt-4">
            <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md">
              See availability
            </button>
            
            {/* Pricing Section */}
            <div className="text-right">
              <p className="text-sm text-gray-600">1 room 2 days</p>
              <p className="text-xs text-red-700 line-through">$150</p>
              <p className="text-xl font-bold text-gray-900">$130</p>
              <p className="text-xs text-gray-500">Includes taxes and fees</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResultSearch;
