import Sidebar from "../components/organisem/Sidebar";
import ResultSearch from "../components/molecules/ResultSearch";
import Footer from "../components/organisem/Footer";
import FilterTab from "../components/organisem/FilterTab";
import FormSearch from "../components/molecules/FormSearch";
import { createContext, useEffect, useState } from "react";
import { getRoom } from "../API/endpoint/room";
import { useParams } from "react-router";

export const SidebaContext = createContext();

export default function Discover() {
  const [allRoom, setAllRoom] = useState([]);
  const [room, setRoom] = useState([]);
  const { id } = useParams();
  const [residence, setResidence] = useState(id);
  const [toggle, setToggle] = useState(false);
  const [sort, setSort] = useState();
  const [priceRange, setPriceRange] = useState([]);
  const [ratingRange, setRatingRange] = useState();
  const handleToggle = () => {
    setToggle(!toggle);
  };


  const getAllRoom = async () => {
    try {
      const response = await getRoom();
      setAllRoom(response.data.data || []);
    } catch (error) {
      console.error("Error 404, please reload the page");
    }
  };

  const filterRoom = () => {
    if (!residence) return;
    const roomFilteredByRes = allRoom.filter(
      (room) => room.residenceId === residence
    );
    setRoom(roomFilteredByRes);
  };

  useEffect(() => {
    getAllRoom();
  }, []);

  useEffect(() => {
    filterRoom();
    scrollToTop();
  }, [allRoom, residence]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
    <SidebaContext.Provider value={{ setPriceRange , priceRange ,setRatingRange }}>

      <div className="h-[250px] gap-0 opacity-100 bg-gradient-to-b from-[#2969BF] to-[#144E9D] relative">
        <div className="absolute sm:-bottom-10 -bottom-14 w-full">
          <FormSearch />
        </div>
      </div>
      <div className="flex mt-[50px] xl:gap-[80px] md:gap-[10px] sm:gap-0">
        <div className="space-y-4">
          <Sidebar
            toggle={toggle}
            handleToggle={handleToggle}
            />
        </div>
        <div className="w-full xl:w-2/3 mx-auto">
          <FilterTab setSort={setSort} />
          
          <ResultSearch
            room={room}
            allRoom={allRoom}
            residence={residence}
            sort={sort}
            priceRange={priceRange}
            ratingRange={ratingRange}
            />
        </div>
      </div>
            </SidebaContext.Provider>
      <Footer />
    </>
  );
}
