import Sidebar from "../components/organisem/Sidebar";
import ResultSearch from "../components/molecules/ResultSearch";
import Footer from "../components/organisem/Footer";

export default function Discover() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="left-column flex-1 space-y-4">
          <Sidebar />
        </div>
        <div className="right-column w-full md:w-2/3 space-y-4 ">
          <ResultSearch />
        </div>
      </div>
      <Footer />
    </>
  );
}
