import React, { useState } from 'react'

export default function Price() {

    const [price, setPrice] = useState('')
    const filterPrice = (priceItem) =>{
        const result = price.filter ((curPrice)=> {
            return curPrice.price === curPrice
        });
        setPrice(result)
    }






  return (
    <div  className='container overflow-hidden flex flex-col w-[295px] h-[293px]  rounded-md border-2 border-[E0E0E0] space-y-[14px]   '>
        <h2 className='     roboto-medium h-[55px] w-[295px] bg-[#F2F2F2] rounded-md py-[18px] pl-[18px] text-[#181818]  ' style={{ borderRadius: '6px 6px 0px 0px' }}> Your budget per day</h2>

        <label className=' relative  flex items-center  mr-5  '> 
            <input className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox"   />
            <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]' onClick={()=> filterPrice  ('$0 - $200')} > </span> $0 - $200
            <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 200
        </label>

        <label className=' relative  flex items-center  mr-5  '> 
            <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none '  type="checkbox" />
            <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]'> </span> $200 - $500
            <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 200
        </label> 
        <label className='  relative  flex items-center  mr-5 '> 
            <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox" />
            <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]'> </span> $500 - $1000
            <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 200
        </label> 
        <label className='  relative  flex items-center  mr-5 '> 
            <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px]  pointer-events-none ' type="checkbox" />
            <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]'> </span> $1000 - $2000
            <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 200
        </label> 
        <label  className='  relative  flex items-center  mr-5 '> 
            <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px]  pointer-events-none ' type="checkbox" />
            <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]'> </span> $2000 - $5000
            <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 200
        </label> 
        <div  className='  relative  flex items-center  mr-5 '> 
        
          <label className=' roboto-regular  ml-[8px] text-[14px] text-[#4F4F4F] ' > Set your own budget </label>
          <input
              className=" mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300
               before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full
                before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] 
                checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s]
               checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] 
               focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
               focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full
                focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] 
                checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] 
                checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400
                 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)]
                  dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] ml-auto"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" />
          
      </div>
    
      
    </div>
  )
}

  
