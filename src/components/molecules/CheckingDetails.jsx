import Hotel from '../../asserts/PNG/Hotel.png';
import Star from '../../asserts/PNG/star.png';
import halfStar from '../../asserts/PNG/halfstar.png';


export default function Checking() {
  return (
    <div className="max-w-md shadow-md rounded-md max-h-[420px] bg-white border border-gray-200">
      <a href="#">
        <img className="rounded-t-md w-full" src={Hotel} alt="Hotel" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            Lakeside Motel Waterfront
          </h5>
          <div className="rating flex items-center">
            <p className="ml-2 text-sm font-medium text-gray-600">
              4.5 (1200 Reviews)
            </p>
          </div>
        </a>
        <div className="cardTextContent my-4 text-sm">
          <p className="text-sm font-normal text-rose-600">Non refundable</p>
          <p className="leading-8 text-gray-600">Check in: Sunday, March 18, 2022</p>
          <p className="leading-8 text-gray-600">Check out: Tuesday, March 20, 2022</p>
          <p className="leading-8 text-gray-600 pb-4">2 night stay</p>
        </div>
      </div>
    </div>
  );
}