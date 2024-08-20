import React from 'react'
import ItemContiner from '../molecules/ItemContainer'

export default function Footer() {
  return (
    <footer className=" w-full  ">

        <div className='py-7 cursor-default pt-[50px]'> 
            <ItemContiner />

        </div>

        <div className=" bg-[#EBEBEB] py-[10px] ">
            <p className="ipad:w-11/12 ipad:mx-auto roboto-regular  text-[#4F4F4F]    ipad:text-right text-center "> ©  my Dream Place 2022</p>
        </div>
        
    </footer>
  )
}
