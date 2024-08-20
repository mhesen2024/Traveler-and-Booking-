import Footer from "../components/organisem/Footer";
import CountryGrid from "../components/organisem/CountryGrid";
import Header from "../components/organisem/Header";
import OffersLink from "../components/organisem/offersLink";
import CityGrid from "../components/organisem/CityGrid";
import TripGrid from "../components/organisem/TripGrid";
import { getCountry } from "../API/endpoint/country";
import { createContext, useEffect, useState } from "react";
import { getCity } from "../API/endpoint/city";
import { Residence } from "../API/endpoint/Residence";

export const CountryContext = createContext();

export default function Home() {
  const [countries, setcountries] = useState([]);
  const [city, setCity] = useState([]);
  const [residence,setResidence]=useState([]); 
  const getCountryData = async () => {
    try {
      const response =await getCountry();
      setcountries(response.data.data);
    } catch {
      console.error('');
    }  
  };
  const getCityData = async ()=>{
    try{
      const response = await getCity();
      setCity(response.data.data);
    }catch(e){
      console.error('');
    }
  }
  const getResidence=async()=>{
    try{
      const response = await Residence();
  setResidence(response.data.data) ; 
    }
    catch{
      console.error('');
    }
  }
  
  useEffect(() => {
    getCountryData();
    getCityData();
    getResidence();
  }, []);

  return (
    <CountryContext.Provider value={{ countries,city,residence }}>
      <Header />
      <CountryGrid />
      <TripGrid />
      <CityGrid />
      <OffersLink />
      <Footer />
    </CountryContext.Provider>
  );
}
