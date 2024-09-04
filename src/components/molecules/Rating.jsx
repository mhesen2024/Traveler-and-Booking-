import React from 'react';

export default function Rating() {
  return (
    <div className='container flex flex-col w-full sm:w-72 h-40 rounded-md border-2 border-gray-300 overflow-hidden ab'>
      <h2 className='bg-gray-200 text-gray-900 font-medium py-4 px-4 rounded-t-md'>Rating</h2>
      <p className='px-4 text-sm text-gray-600 mt-4'>Show only ratings more than</p>
      <div className='flex justify-around mt-4'>
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className='flex items-center'>
            <p className='text-sm'>{rating}</p>
            <i className='fa-solid fa-star text-yellow-400 ml-1'></i>
          </div>
        ))}
      </div>
    </div>
  );
}
