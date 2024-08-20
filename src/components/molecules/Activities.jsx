import React, { useState } from 'react'

export default function Activities() {

    /*
    const [activity, setActivity] = useState("activities");
    const filterActivity = (activeItem) => {
        const result = activities.filter((curActivity) => {
            return  curActivity.activity === curActivity ;
        }); 
        setActivity(result);
    }
*/



  return ( 
    <div className=' overflow-hidden h-[287px] w-[295px]  rounded-md border-2 border-[E0E0E0] '> 
        <div className=' '> 
            <h2 className=' roboto-medium h-[55px] w-[295px] bg-[#F2F2F2] rounded-md py-[18px] pl-[18px] text-[#181818] ' style={{ borderRadius: '6px 6px 0px 0px' }}> Activities</h2>
        </div> 
        <div className=' relative  block items-center  mr-5   mt-[18px] space-y-[14px]     '> 
            <label className=' flex   mr-5  '> 
                <input className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox"   />   
                <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]' onClick={()=> filterActivity ('Fishing')}> </span> Fishing
                <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 200
            </label>
            <label className='  relative  flex items-center  mr-5  '> 
                <input className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox"   />
                <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]' onClick={()=> filterActivity ('Hiking')}> </span> Hiking
                <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 100
            </label>
            <label className='  relative  flex items-center  mr-5  '> 
                <input className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox"   />
                <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]' onClick={()=> filterActivity ('Cycling')}> </span>Cycling
                <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 15
            </label> 
            <label className='  relative  flex items-center  mr-5  '> 
                <input className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox"   />
                <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]' onClick={()=> filterActivity ('Sauna')}> </span> Sauna
                <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 230
            </label> 
            <label className=' relative  flex items-center  mr-5  '> 
                <input className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox"   />   
                <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]' onClick={()=> filterActivity ('Night lights')}> </span> Night lights
                <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 12
            </label> 
    

        </div>














          
  
    </div>
  )
}
