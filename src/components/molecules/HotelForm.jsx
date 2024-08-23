import React, { useState } from 'react';

const HotelForm = () => {
  const [hotel, setHotel] = useState({
    name: '',
    country: '',
    city: '',
    description: '',
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHotel({
      ...hotel,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setHotel({
      ...hotel,
      image: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Hotel Data:', hotel);
    setHotel({
      name: '',
      country: '',
      city: '',
      description: '',
      image: null,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-8 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add Hotel</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Hotel Name</label>
          <input
            type="text"
            name="name"
            value={hotel.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the hotel name"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Country</label>
          <select
            name="country"
            value={hotel.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a country</option>
            {/* Add options here */}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">City</label>
          <select
            name="city"
            value={hotel.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a city</option>
            {/* Add options here */}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={hotel.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Enter the hotel description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-medium" htmlFor="HotelImage">
            Hotel Image
            <span className="block mt-2 text-blue-600 cursor-pointer flex items-center">
              <i className="fa fa-camera fa-2x mr-2"></i>
              <span className="text-base">Upload Image</span>
            </span>
          </label>
          <input
            type="file"
            id="HotelImage"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="hidden"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelForm;
