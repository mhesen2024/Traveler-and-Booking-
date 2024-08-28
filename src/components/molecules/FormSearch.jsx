import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../views/Home";

export default function FormSearch() {
  const [country, setCountry] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredResidence, setFilteredResidence] = useState([]);
  const [city, setCity] = useState("");
  const [res, setRes] = useState("");
  const { residenceType, countries, cites } = useContext(CountryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("country", country);
    localStorage.setItem("city", city);
    localStorage.setItem("residence", res);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  };

  const handleResidenceChange = (e) => {
    const selectedResidence = e.target.value;
    setRes(selectedResidence);
  };

  useEffect(() => {
    if (country) {
      const filterCity = cites.filter((city) => city.country === country);
      setFilteredCities(filterCity);
      setCity("");
    } else {
      setFilteredCities([]);
      setCity("");
    }
  }, [country, cites]);

  useEffect(() => {
    if (city) {
      const filteredResidence = residenceType.filter(
        (res) => res.CityId === city.id
      );
      setFilteredResidence(filteredResidence);
    } else {
      setFilteredResidence([]);
    }
  }, [city, residenceType]);

  return (
    <form
      className="md:w-10/12 shadow-xl mx-auto flex flex-wrap gap-[12px] py-[11px] px-[12px] bg-white rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex md:grow-0 grow basis-64 gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-solid fa-flag mt-1 text-gray-400"></i>
        <select
          id="countries"
          className="bg-transparent outline-none roboto-regular text-sm w-full"
          onChange={handleCountryChange}
          value={country}
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
          onChange={handleCityChange}
          value={city}
        >
          <option hidden>City</option>
          {filteredCities.map((city) => (
            <option className="text-base" key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-64 md:grow-0 grow gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-solid fa-hotel mt-1 text-gray-400"></i>
        <select
          id="hotel"
          className="bg-transparent outline-none roboto-regular text-sm w-full"
          disabled={!city}
          onChange={handleResidenceChange}
          value={res}
        >
          <option hidden>Residence</option>
          {filteredResidence.map((residence) => (
            <option className="text-base" key={residence.id} value={residence.name}>
              {residence.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className={`roboto-medium text-[15px] grow basis-80 cursor-pointer drop-shadow-lg ${res ?'hover:bg-[#2569c2] bg-[#2e79da]':'bg-[#7fafef]'} sm:py-[11px] rounded-md text-white`}
        disabled={!country || !city || !res}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
