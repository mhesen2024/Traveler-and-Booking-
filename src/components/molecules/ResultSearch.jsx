import React from 'react';
import HotelImage from '../../asserts/PNG/Hotel.png'; 
import Star from '../../asserts/PNG/star.png'; 
import HalfStar from '../../asserts/PNG/halfstar.png';
import Julia from '../../asserts/PNG/Julia.png';
import Marinerford from '../../asserts/PNG/Marinerford.png';
import AghnimScepter from '../../asserts/PNG/Aghnim Scepter.png';
import ShanghaiOpen from '../../asserts/PNG/Shanghai Open.png';
import OceanWavesResort from '../../asserts/PNG/Ocean Waves Resort.png';
import MaimiCityfrontier from '../../asserts/PNG/Maimi City frontier.png';
import LakesideMotelWarefront from '../../asserts/PNG/Lakeside Motel Warefront.png'; 
import { useNavigate } from 'react-router-dom';  


export const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();  

  const handleAvailabilityClick = () => {
    navigate('/Checkout');  
  };

  return (
    <div className="flex bg-white shadow-md rounded-md overflow-hidden w-full max-w-4xl border border-gray-200 mt-[20px]">
      {/* Left: Hotel Image */}
      <img src={hotel.image} alt="Hotel" className="w-1/3 object-cover" />
      
      {/* Right: Details */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">{hotel.name}</h2>
            <div className="flex items-center mt-2">
              {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                <img src={Star} alt="Star" className="h-4 w-4" key={i} />
              ))}
              {hotel.rating % 1 !== 0 && <img src={HalfStar} alt="Half Star" className="h-4 w-4" />}
              <span className="ml-2 text-sm text-gray-600">{hotel.rating} ({hotel.reviews} Reviews)</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {hotel.description}
            </p>
          </div>
          {hotel.discount && (
            <div className="flex flex-col items-end">
              <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md mb-2">
                {hotel.discountText}
              </button>
              <div className="flex items-center text-green-600 text-sm">
                <span>{hotel.discount}% off</span>
              </div>
            </div>
          )}
        </div>
        
        {/* See Availability Button */}
        <div className="flex justify-between items-center mt-4">
          <button 
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md"
            onClick={handleAvailabilityClick}  // Handle click event
          >
            See availability
          </button>
          
          {/* Pricing Section */}
          <div className="text-right">
            <p className="text-sm text-gray-600">{hotel.roomInfo}</p>
            {hotel.oldPrice && (
              <p className="text-xs text-gray-500 line-through">{hotel.oldPrice}</p>
            )}
            <p className="text-xl font-bold text-gray-900">{hotel.newPrice}</p>
            <p className="text-xs text-gray-500">Includes taxes and fees</p>
          </div>
        </div>
      </div>
    </div>
  );
};



const ResultSearch = () => {

  const hotels = [
    {
      image: HotelImage,
      name: "Lakeside Motel Warefront",
      rating: 4.5,
      reviews: 1200,
      description: "Live a little and celebrate with champagne. Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.",
      oldPrice: "$150",
      newPrice: "$130",
      roomInfo: "1 room 2 days",
      discount: 5,
      discountText: "Book now and receive 15% off"
    },
    {
      image: Julia,
      name: "Julia Dens Resort",
      rating: 4.5,
      reviews: 1200,
      description: "Live a little and celebrate with champagne. Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.",
      oldPrice: null,
      newPrice: "$240",
      roomInfo: "1 room 2 days",
      discount: null,
      discountText: ""
    },
   
    {
      image: AghnimScepter,
      name: "Aghnim Scepter Hotel",
      rating: 4.5,
      reviews: 1200,
      description: "Live a little and celebrate with champagne. Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.",
      oldPrice: null,
      newPrice: "$300",
      roomInfo: "1 room 2 days",
      discount: 30,
      discountText: "Receive 30% discount on a restaurant"
    },
    {
      image: Marinerford ,
      name: "Marinerford Hotel",
      rating: 4.5,
      reviews: 1200,
      description: "Live a little and celebrate with champagne. Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.",
      oldPrice: null,
      newPrice: "$120",
      roomInfo: "1 room 2 days",
      discount: null,
      discountText: ""
    },
    {
      image: ShanghaiOpen ,
      name: "Shanghai Open House",
      rating: 4.5,
      reviews: 1200,
      description: "Live a little and celebrate with champagne. Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.",
      oldPrice: null,
      newPrice: "$145",
      roomInfo: "1 room 2 days",
      discount: null,
      discountText: ""
    },
    {
      image: OceanWavesResort,
      name: "Ocean Waves Resort",
      rating: 4.5,
      reviews: 1200,
      description: "Live a little and celebrate with champagne. Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.",
      oldPrice: null,
      newPrice: "$310",
      roomInfo: "1 room 2 days",
      discount: null,
      discountText: ""
    },
    {
      image: MaimiCityfrontier,
      name: "Malimi City Frontier",
      rating: 4.5,
      reviews: 1200,
      description: "Live a little and celebrate with champagne. Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.",
      oldPrice: null,
      newPrice: "$190",
      roomInfo: "1 room 2 days",
      discount: 15,
      discountText: "Receive 30% discount on a restaurant"
    },
    {
      image: LakesideMotelWarefront,
      name: "Lakeside Motel Warefront",
      rating: 4.5,
      reviews: 1200,
      description: "Live a little and celebrate with champagne. Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies.",
      oldPrice: "320$",
      newPrice: "300$",
      roomInfo: "1 room 2 days",
      discount: null,
      
    },
    
  ];

  return (
    <div className="flex flex-col items-center">
      {hotels.map((hotel, index) => (
        <HotelCard hotel={hotel} key={index} />
      ))}
    </div>
  );
};

export default ResultSearch;
