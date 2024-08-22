import React from 'react'
import { useState } from "react";


const CityForm = () => {
    const [city, setCity] = useState({ 
        name:'',
        country:'',
        description:'',
        image:''
    })
    const handleChange =(event)=>{
        const {name , value} = event.target;
        setCity({
            ...city,
        });
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setCity({
            ...city,
            image: file,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setCity({
            name:'',
            country:'',
            description:'',
            image:null,
        });
    };



  return (
    <div className='container border-4 rounded border-gray-50 w-11/12 h-[250px] m-auto  '>
            <h2  className=' ml-6 mt-6  roboto-medium '> Add City </h2>
            <form onSubmit={handleSubmit} className='flex  px-5 space-x-6 justify-center gap-8 mt-5'> 
                <div className='space-y-2 flex  flex-col   '>
                    <label className=' roboto-regular'>City Name</label>
                    <input type="text"  name="cityName"  value={city.name} onChange={handleChange} required
                    className=' border-4 rounded border-gray-50  w-44 h-9' placeholder='Enter the city name'></input>
                </div> 
                <div className='space-y-2 flex  flex-col   '>
                    <label className=' roboto-regular'>Country Name</label>
                    <select className=' border-4 rounded border-gray-50  w-44 h-9' placeholder='Enter the country name' > 
                        <option value="">Select a country</option>
                    </select>
                 </div>

                <div className='space-y-2 flex  flex-col  '>
                    <label className=' roboto-regular'>Description</label>
                    <textarea   type="text"  name="description" value={city.description} onChange={handleChange} required   rows="3" placeholder="Enter the city description" className='resize-y  border-4 rounded border-gray-50  w-48 h-12'  > </textarea>
                 </div>  
                 <div className='space-y-2 flex  flex-col  '>
                    <label className=' roboto-regular flex  flex-col  ' htmlFor= "cityImage" >City Image 
                    <span >  <i className="fa fa-camera fa-2x text-[60px] mt-2  " aria-hidden="true"></i>   </span>
                    </label>
                    <input type="file" id='cityImage'    class="hidden" accept="image/*"  value={city.image} onChange={handleChange} required />
                </div>
                
                <div className=""> 
                    <button type="submit" className=" h-9 w-20 mt-8 bg-blue-500 text-white py-2 rounded font-medium mb-3 hover:bg-blue-700">Save</button>
                </div> 
                
            </form>
        </div> 
  )
}

export default CityForm
