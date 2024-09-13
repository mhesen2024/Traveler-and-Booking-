import React from 'react'

export default function Sort({handleSortChange}) {
  return (
    <div className="w-full relative h-10 mt-3">
    <div className="w-[200px] absolute right-3">
      <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      onChange={handleSortChange}
      >
        <option
          hidden
          className="text-gray-200 focus:outline-none focus:border-none"
        >
          Recommended
        </option>
        <option value="price h-l">Price H-L</option>
        <option value="price l-h">Price L-H</option>
        <option value="rating h-l">Rating H-L</option>
        <option value="rating l-h">Rating L-H</option>
      </select>
    </div>
  </div>
  )
}
