import React, { useEffect, useState } from 'react';
import { getRoom } from '../../API/endpoint/room';

export default function ResultSearch() {
  const [allRoom, setAllRoom] = useState([]);
  const [room, setRoom] = useState([]);
  const [residence, setResidence] = useState(localStorage.getItem('residence') || '');

  const getAllRoom = async () => {
    try {
      const response = await getRoom();
      setAllRoom(response.data.data || []);
    } catch (error) {
      console.error('Error 404, please reload the page');
    }
  };

  const filterRoom = () => {
    if (!residence) return;
    const roomFilteredByRes = allRoom.filter((room) => room.residenceId === residence);
    setRoom(roomFilteredByRes);
  };

  useEffect(() => {
    getAllRoom();
  }, []);

  useEffect(() => {
    filterRoom();
  }, [allRoom, residence]);

  return (
    <div>
      {room.length > 0 ? (
        room.map((room) => (
          <div key={room.id} className='flex gap-[24px] p-5 border rounded-md relative'>
            <div className='relative w-[285px] h-[200px] object-cover rounded-md overflow-hidden'>
              <img src={room.imageUrl} className='absolute w-full h-full' alt={room.residence || 'Room'} />
            </div>
            <div className='grow'>
              <h1 className='text-[20px] roboto-medium mb-2'>{room.residence}</h1>
              <p className='text-[13px] mb-[17px]'>Rating {room.rating}/5</p>
              <p className='text-[13px] w-[380px] mb-[7px] truncate '>{room.description}</p>
              <p className='text-[11px] mb-[2px]'>Adults Capacity: {room.adultsCapacity}</p>
              <p className='text-[11px] mb-[10px]'>Children Capacity: {room.childrenCapacity}</p>
              <div className='flex justify-between'>
                <button className='text-[15px] bg-[#2F80ED] hover:bg-[#2870ce] rounded-md h-[40px] w-[140px] text-white'>
                  See availability
                </button>
                <div>
                  <span className='text-[20px] roboto-medium'>${room.pricePerNight}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className='text-[18px] text-center p-5'>No rooms available in this location.</p>
      )}
    </div>
  );
}
