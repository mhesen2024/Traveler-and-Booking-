import HotelImage from '../atoms/HotelImage';
import img from '../../asserts/PNG/resturant.jpeg'; // إذا كنت تستخدم صورة ثابتة، تأكد من استخدام الصورة المناسبة

const HotelCard = ({ city }) => (
  <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg duration-300 hover:shadow-xl">
    <div className="relative overflow-hidden h-48">
      <HotelImage src={city.imageUrl || img} alt={city.name} className="object-cover w-full h-full" />
    </div>
    <div className="p-4 bg-white">
      <h3 className="text-xl font-semibold text-gray-800">{city.name}</h3>
      <span className="text-sm text-gray-600">{city.country}</span>
    </div>
  </div>
);

export default HotelCard;
