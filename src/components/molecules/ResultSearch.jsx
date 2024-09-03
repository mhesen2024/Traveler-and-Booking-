import React from "react";
import { useNavigate } from "react-router";

export default function ResultSearch({ room, allRoom, residence }) {
  const navigate = useNavigate("");
  return (
    <div className="flex flex-col gap-6 p-4">
      {room.length > 0 ? (
        room.map((room) => (
          <div
            key={room.id}
            className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-5 border rounded-md relative"
          >
            <div className="relative w-full h-48 lg:w-72 lg:h-56 object-cover rounded-md overflow-hidden">
              <img
                src={room.imageUrl}
                className="absolute w-full h-full object-cover"
                alt={room.residence || "Room"}
              />
            </div>
            <div className="flex flex-col grow">
              <h1 className="text-lg lg:text-xl roboto-medium mb-2 capitalize">
                {room.residence}
              </h1>
              <p className="text-sm lg:text-base mb-4">Rating {room.rating}/5</p>

              <p className="text-xs lg:text-sm mb-1">
                Adults Capacity: {room.adultsCapacity}
              </p>
              <p className="text-xs lg:text-sm mb-1">Room Type {room.roomType}</p>
              <p className="text-xs lg:text-sm mb-4">
                Children Capacity: {room.childrenCapacity}
              </p>
              <div className="flex flex-col-reverse lg:flex-row justify-between ">
                <button
                  className="text-sm lg:text-base bg-[#2F80ED] hover:bg-[#2870ce] rounded-md h-10 lg:h-12 w-full lg:w-36 text-white mb-4 lg:mb-0"
                  onClick={() => {
                    navigate(`/Checkout/${room.id}`);
                  }}
                >
                  See availability
                </button>
                <div className="text-center lg:text-right">
                  <span className="text-lg lg:text-xl roboto-medium">
                    ${room.pricePerNight}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          {residence ? (
            <p className="text-center text-gray-500">
              No rooms available in this location.
            </p>
          ) : (
            allRoom.map((room) => (
              <div
                key={room.id}
                className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-5 border rounded-md relative"
              >
                <div className="relative w-full h-48 lg:w-72 lg:h-56 object-cover rounded-md overflow-hidden">
                  <img
                    src={room.imageUrl}
                    className="absolute w-full h-full object-cover"
                    alt={room.residence || "Room"}
                  />
                </div>
                <div className="flex flex-col grow">
                  <h1 className="text-lg lg:text-xl roboto-medium mb-2 capitalize">
                    {room.residence}
                  </h1>
                  <p className="text-sm lg:text-base mb-4">Rating {room.rating}/5</p>
                  <p className="text-sm lg:text-base lg:w-[380px] mb-4 truncate">
                    {room.description}
                  </p>
                  <p className="text-xs lg:text-sm mb-1">
                    Adults Capacity: {room.adultsCapacity}
                  </p>
                  <p className="text-xs lg:text-sm mb-4">
                    Children Capacity: {room.childrenCapacity}
                  </p>
                  <div className="flex flex-col lg:flex-row justify-between mt-auto">
                    <button
                      className="text-sm lg:text-base bg-[#2F80ED] hover:bg-[#2870ce] rounded-md h-10 lg:h-12 w-full lg:w-36 text-white mb-4 lg:mb-0"
                      onClick={() => {
                        navigate(`/Checkout/${room.id}`);
                      }}
                    >
                      See availability
                    </button>
                    <div className="text-center lg:text-right">
                      <span className="text-lg lg:text-xl roboto-medium">
                        ${room.pricePerNight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
