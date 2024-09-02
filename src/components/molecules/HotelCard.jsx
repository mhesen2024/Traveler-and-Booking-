import HotelImage from "../atoms/HotelImage";
const HotelCard = ({ residence }) => (
  <div
    className="rounded-lg overflow-hidden border border-gray-200 shadow-lg duration-300 hover:shadow-xl cursor-pointer"
    onClick={()=>{localStorage.setItem('residance',JSON.stringify(residence))}}
  >
    <div className="relative overflow-hidden h-48">
      <HotelImage
        src={residence.imageUrl}
        alt={residence.name}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-4 bg-white">
      <h3 className="text-xl font-semibold text-gray-800">{residence.name}</h3>
      <span className="text-sm text-gray-600">{residence.residenceType}</span>
    </div>
  </div>
);

export default HotelCard;
