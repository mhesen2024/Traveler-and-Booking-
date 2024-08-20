import React from 'react' 
//import star from  '../../asserts/SVG/star.svg'

export default function Rating() {
  return (
    <div className=' overflow-hidden container flex flex-col w-[295px] h-[170px]  rounded-md border-2 border-[E0E0E0]   '>
        <h2  className=' roboto-medium h-[55px] w-[295px] bg-[#F2F2F2] rounded-md pt-[20px] pl-[18px]  text-[#181818]  ' > Rating </h2>

        <p className='roboto-regular  ml-[8px] text-[14px] mt-[20px] text-[#4F4F4F]'>Show only ratings more than</p>
      
{/* 
        <table className='mx-[24px] mt-[8px]'>
        <tr className='pt-[8px] pl-[18px] pb-[24px] mx-[23px] ' >
              <td className=" h-[46px] w-[50px]  border-[1px] rounded-md   border-gray-200  "> 
                <div className='flex justify-center'>
                  <p>1</p>
                    <img src={star} />
                  </div>
              </td>
              <td className=" h-[46px] w-[50px]  border-[1px] rounded-md   border-gray-200  "> 
                <div className='flex justify-center'>
                  <p>2</p>
                    <img src={star} />
                  </div>
              </td>
              <td className=" h-[46px] w-[50px]  border-[1px] rounded-md   border-gray-200   "> 
                <div className='flex justify-center'>
                  <p>3</p>
                    <img src={star} />
                  </div>
              </td>
              <td className=" h-[46px] w-[50px]  border-[1px] rounded-md   border-gray-200   "> 
                <div className='flex justify-center'>
                  <p>4</p>
                    <img src={star} />
                  </div>
              </td> 
              <td className=" h-[46px] w-[50px] border-[1px]  rounded-md wswborder-gray-200  ">
              <div className='flex justify-center '>
                  <p>5</p>
                    <img src={star} />
                  </div>
              </td>
            </tr>
        </table> */}
        <i className='fa-solid fa-star" style="color: #FFD43B;'></i>
      
    </div>
  )
}
