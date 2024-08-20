import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../views/Home";



export default function FormSearch() {
  const [country, setCountry] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const { residence,countries, city } = useContext(CountryContext);

  const handleChangeCountry = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  };

  useEffect(() => {
    if (country) {
      const filterCity = city.filter((city) => city.country === country);
      setFilteredCities(filterCity);
    } else {
      setFilteredCities([]);
    }
  }, [country, city]);

  return (
    <form className="md:w-10/12 shadow-xl mx-auto flex flex-wrap gap-[12px] py-[11px] px-[12px] bg-white rounded-lg">
      <div className="flex md:grow-0 grow basis-64 gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-solid fa-flag mt-1 text-gray-400"></i>
        <select
          id="countries"
          className="bg-transparent outline-none roboto-regular text-sm w-full"
          onChange={handleChangeCountry}
        >
          <option hidden>Country</option>
          {countries.map((country) => (
            <option className="text-base" key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-64 gap-[10px] md:grow-0 grow sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-solid fa-city mt-1 text-gray-400"></i>
        <select
          id="city"
          className="bg-transparent outline-none roboto-regular text-sm w-full"
          disabled={!country}
        >
          <option hidden>City</option>
          {filteredCities.map((city, index) => (
            <option className="text-base" key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-64  md:grow-0 grow selection: gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-solid fa-hotel mt-1 text-gray-400"></i>
        <select
          id="hotel"
          className="bg-transparent outline-none roboto-regular text-sm w-full "
        >
          <option hidden>residence</option>
          {residence.map((residence, index) => (
            <option className="text-base" key={index} value={residence.name}>
              {residence.name}
            </option>
          ))}
        </select>
      </div>

      <button className="roboto-medium text-[15px] grow  basis-80 hover:bg-[#2262b6] drop-shadow-lg bg-[#2F80ED] sm:py-[11px] rounded-md text-white">
        Search
      </button>
    </form>
  );
}
