import React from 'react'
import Search from '../molecules/Search'
import Price from '../molecules/Price'
import Rating from '../molecules/Rating'
import Category from '../molecules/Category'
import Activities from '../molecules/Activities'

export default function Sidebar() {
  return (
    <div className='contanier flex flex-col pl-[100px] space-y-[20px] mt-[304px] cursor-auto ' >
        <Search />
        <div className='ml-[18px]'> <h1 className='text-[#333333] text-[18px] roboto-bold  '>Filter by</h1></div>
        <Price /> 
        <Rating />
        <Category />
        <Activities />
    </div>
  )
}
