import HotelCard from "../molecules/HotelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import { CountryContext } from "../../views/Home";


const CityGrid = () => {
  const { city} = useContext(CountryContext);

  
  
  return (
    <div className="text-start pt-8 w-11/12 mx-auto mb-[40px] mt-[12px]">
      {
        console.log(city)
        
      }
      <h2 className="text-3xl font-bold mb-4"> City </h2>
   
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={true}
        breakpoints={{
     
          340: {
            slidesPerView: 1
          },
          540: {
            slidesPerView: 2
          },
          700: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {city.map((city, index) => (
          <SwiperSlide key={index}>
            <HotelCard city={city} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CityGrid;
