import React, { useEffect, useState } from 'react';
import Search from '../molecules/Search';
import Price from '../molecules/Price';
import Rating from '../molecules/Rating';
import Category from '../molecules/Category';
import Activities from '../molecules/Activities';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      <button
        className="sm:hidden px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Filters +
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-5 transform bg-white w-64 transition-transform duration-300  z-40 overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:relative sm:translate-x-0 sm:w-72`}
      >
        <div className="container flex flex-col space-y-4 sm:space-y-6 mt-12 sm:mt-16 md:mt-24 cursor-auto">
        
          <Price />
          <Rating />
          {/* <Category />
          <Activities /> */}
        </div>
      </div>
    </div>
  );
}
