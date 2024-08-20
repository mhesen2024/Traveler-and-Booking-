import { CountryContext } from '../../views/Home';
import CountryImage from '../atoms/CountryImage';

import React, { useContext } from 'react'

export default function CountryCard({countries}) {
  return (
    <div className=" cursor-pointer rounded-xl shadow-lg border overflow-hidden  hover:shadow-2xl transition-shadow duration-[0.9ms]">
    <CountryImage src={countries.imageUrl} alt={countries.name} />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{countries.name}</h3>
    </div>
  </div>
  )
}
