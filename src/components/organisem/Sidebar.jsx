import React from "react";
import Price from "../molecules/Price";
import Rating from "../molecules/Rating";

export default function Sidebar({ toggle, handleToggle }) {
  return (
    <>
      <div
        className={`fixed bottom-16 left-0 p-3 z-10 rounded-tr-md rounded-br-md bg-blue-500 ${
          toggle ? "hidden" : "block"
        } laptop:hidden`}
        onClick={handleToggle}
      >
        <i className="fa-solid fa-filter fa-xl text-white"></i>
      </div>

      <div
        className={`laptop:block tablet:hidden hidden ml-4 mt-16 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <Price />
        <Rating />
      </div>
      {
        window.innerWidth <= 1020 ?
(        <div
        className={`fixed top-0 -left-10 bottom-0 z-10 bg-white  rounded-tr-md rounded-br-md  duration-500 ${
          toggle ? 'mobile:w-[50%]   left-1' : 'tablet:w-0 w-0'
          } p-4 mt-16`}
          >
        
        <div className={`mt-10 relative ${
          toggle ? 'tablet:block block' : 'tablet:opacity-0 opacity-0'
        } duration-700`} >
<i class="fa-solid fa-x absolute right-3 top-3"  onClick={handleToggle}></i>

        <Price />
        <Rating />
        </div>
      </div>):''
}


    </>
  );
}
