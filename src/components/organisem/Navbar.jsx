import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import NavLinks from "../molecules/NavLinks";
import Logo from "../../views/Logo";
import profilePic from "../../asserts/PNG/profile.png";

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imgProfile, setImgProfile] = useState(profilePic);
  const [userName, setUserName] = useState();
  const menuLinks = [
    { to: "/", title: "Home" },
    { to: "/Discover", title: "Discover" },
    { to: "/Activities", title: "Activities" },
    { to: "/About", title: "About" },
    { to: "/Contact", title: "Contact" }
  ];

  const handleLogOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const user = localStorage.getItem("userName");
    setUserName(user);
    
    if (storedUser) {
      setImgProfile(storedUser.imageUrl || profilePic);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed z-20 w-full top-0 bg-white">
      <nav className="flex  items-center justify-between h-[68px]  mx-auto tablet:w-full tablet:px-4 laptop:w-11/12  ">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="hidden tablet:flex gap-[32px] text-[16px] text-[#333]">
          {menuLinks.map((link, index) => (
            <NavLinks key={index} to={link.to} title={link.title} />
          ))}
          {userName === "Manager" && <NavLinks to="/add" title="Add" />}
        </ul>

        {isAuthenticated ? (
          <div className="hidden tablet:flex items-center gap-[20px]">
            <div className="profile">
              <img
                src={imgProfile}
                alt="Profile"
                className="rounded-full w-[40px] h-[40px] object-cover cursor-pointer"
                onClick={() => navigate("/profile")}
              />
            </div>
            <Link
              to="/SignIn"
              className="bg-[#2F80ED] shadow-md text-white px-[18px] py-[10px] rounded hover:bg-blue-700 transition duration-300"
              onClick={handleLogOut}
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div className="hidden tablet:flex gap-[10px]">
            <Link
              to="/Register"
              className="border shadow-md border-[#2F80ED] text-[#2F80ED] px-[18px] py-[10px] rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Register
            </Link>
            <Link
              to="/SignIn"
              className="bg-[#2F80ED] shadow-md text-white px-[18px] py-[10px] rounded hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </Link>
          </div>
        )}

        <div className="tablet:hidden flex items-center">
          <button
            className="text-[#2F80ED] hover:text-blue-600 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } tablet:hidden absolute top-[68px] left-0 w-full bg-white shadow-lg z-10`}
        >
          <ul className="flex flex-col gap-[20px] text-[16px] text-[#333] p-[20px]">
            {menuLinks.map((link, index) => (
              <NavLinks key={index} to={link.to} title={link.title} />
            ))}
            {isAuthenticated ? (
              <div className="flex gap-[10px] items-center">
                <div className="profile">
                  <img
                    src={imgProfile}
                    alt="Profile"
                    className="rounded-full w-[40px] h-[40px]"
                  />
                </div>
              </div>
            ) : (
              <ul className="flex gap-[10px]">
                <li>
                  <Link
                    to="/Register"
                    className="border border-[#2F80ED] text-[#2F80ED] px-[18px] py-[10px] rounded hover:bg-blue-600 hover:text-white transition duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SignIn"
                    className="bg-[#2F80ED] text-white px-[18px] py-[10px] rounded hover:bg-blue-700 transition duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
