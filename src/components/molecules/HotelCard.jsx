
import HotelImage from '../atoms/HotelImage'
import img from '../../asserts/PNG/resturant.jpeg'

const HotelCard =({city}) => (
  <div className=" rounded-lg  overflow-hidden border duration-300">
    <div className='overflow-hidden h-[210px]'>
    <HotelImage  src={city.imageUrl} alt={city.name}/>
    </div>
    <div className="p-2" >
      <h3  className="text-xl font-semibold "> {city.name} </h3>
      <span className='text-[12px]'>
      {city.country}
      </span>
    </div>

  </div>

); 
export default HotelCard



 