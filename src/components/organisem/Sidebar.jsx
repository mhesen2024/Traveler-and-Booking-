import React from 'react';
import Search from '../molecules/Search';
import Price from '../molecules/Price';
import Rating from '../molecules/Rating';
import Category from '../molecules/Category';
import Activities from '../molecules/Activities';

export default function Sidebar() {
  return (
    <div className='container flex flex-col pl-4 sm:pl-8 md:pl-16 space-y-4 md:space-y-6 mt-12 sm:mt-16 md:mt-24 cursor-auto'>
      <Search />
      <div className='ml-4'>
        <h1 className='text-gray-800 text-lg font-bold'>Filter by</h1>
      </div>
      <Price />
      <Rating />
      <Category />
      <Activities />
    </div>
  );
}
