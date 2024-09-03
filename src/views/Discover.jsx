import Sidebar from "../components/organisem/Sidebar";
import ResultSearch from "../components/molecules/ResultSearch";
import Footer from "../components/organisem/Footer";
import FilterTab from "../components/organisem/FilterTab";
import FormSearch from "../components/molecules/FormSearch";
import { useEffect, useState } from "react";
import { getRoom } from "../API/endpoint/room";
import { useParams } from "react-router";


export default function Discover() {
  const [allRoom, setAllRoom] = useState([]);
  const [room, setRoom] = useState([]);
  const {id} = useParams();
  const [residence,setresidence]=useState(id);

  const getAllRoom = async () => {
    try {
      const response = await getRoom();
      setAllRoom(response.data.data || []);
    } catch (error) {
      console.error('Error 404, please reload the page');
    }
  };

  const filterRoom = () => {
    if (!residence) return;
    const roomFilteredByRes = allRoom.filter((room) => room.residenceId === residence);
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
      behavior: "smooth", 
    });
  };
  return (
    <>
      <div className="w-full h-[250px] gap-0 opacity-100 bg-gradient-to-b from-[#2969BF] to-[#144E9D] relative">
      <div className='absolute sm:-bottom-10 -bottom-14 w-full'>
      <FormSearch/>
     </div>
      </div>
      <div className="flex flex-col md:flex-row mt-[50px] gap-[100px]">
        <div className="  space-y-4">
          <Sidebar />
        </div>
        <div className="right-column w-full md:w-2/3 space-y-4">
        <FilterTab/>
        <ResultSearch room={room} allRoom={allRoom} residence={residence} />
        </div>
      </div>
      <Footer />
    </>
  );
}
