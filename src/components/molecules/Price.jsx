import React, { useState } from 'react';

export default function Price() {
  const [price, setPrice] = useState('');

  const filterPrice = (priceItem) => {
    const result = price.filter((curPrice) => curPrice.price === priceItem);
    setPrice(result);
  }

  return (
    <div className='container flex flex-col w-full sm:w-72 h-72 rounded-md border-2 border-gray-300 space-y-4 overflow-hidden'>
      <h2 className='bg-gray-200 text-gray-900 font-medium py-4 px-4 rounded-t-md'>Your budget per day</h2>
      {['$0 - $200', '$200 - $500', '$500 - $1000', '$1000 - $2000', '$2000 - $5000'].map((item, index) => (
        <label key={index} className='flex items-center px-4'>
          <input className='h-5 w-5 rounded-md border-2 border-gray-300' type="checkbox" />
          <span className='ml-2 text-sm'>{item}</span>
          <span className='ml-auto text-sm'>200</span>
        </label>
      ))}
      <div className='flex items-center px-4'>
        <span className='text-sm text-gray-600'>Set your own budget</span>
        <input className='ml-auto h-5 w-8 rounded-md border-2 border-gray-300' type="checkbox" role="switch" />
      </div>
    </div>
  );
}
