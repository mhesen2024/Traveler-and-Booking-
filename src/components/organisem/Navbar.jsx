import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import NavLinks from '../molecules/NavLinks';
import Logo from '../../views/Logo';
//import profilePictureUrl from '../../asserts/profile-picture-url.png' 
import profilePic from '../../asserts/PNG/profile-picture-url.png'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication status

  const menuLinks = [
    { to: '/', title: 'Home' },
    { to: '/Discover', title: 'Discover' },
    { to: '/Activities', title: 'Activities' },
    { to: '/About', title: 'About' },
    { to: '/Contact', title: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between h-[68px] py-[24px] mx-auto tablet:w-full tablet:px-1 laptop:w-11/12 w-11/12 bg-white">
      <div className="logo">
        <Link to='/'>
          <Logo />
        </Link>
      </div>

      {isAuthenticated ? (
        <>
          {/* Navbar for authenticated users */}
          <ul className="hidden tablet:flex gap-[48px] text-[16px] text-[#333]">
            {menuLinks.map((link, index) => (
              <NavLinks key={index} to={link.to} title={link.title} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            ))}
          </ul>
          <div className="hidden tablet:flex items-center gap-[20px]">
            <div className="notification">
              <i className="fa fa-bell text-[#2F80ED] fa-xl"></i>
            </div>
            <div className="profile">
            <img src={profilePic } alt="Profile" className="rounded-full w-[40px] h-[40px]" />
           {/*  <img src={profilePictureUrl} alt="Profile" className="rounded-full w-[40px] h-[40px]" /> */}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Navbar for non-authenticated users */}
          <ul className="hidden tablet:flex gap-[48px] text-[16px] text-[#333]">
            {menuLinks.map((link, index) => (
              <NavLinks key={index} to={link.to} title={link.title} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            ))}
          </ul>
          <div className="hidden tablet:flex gap-[10px]">
            <Link to="/Register" className="border shadow-md border-[#2F80ED] text-[#2F80ED] px-[18px] py-[10px] rounded hover:bg-blue-600 hover:text-white transition duration-300">Register</Link>
            <Link to="/SignIn" className="bg-[#2F80ED] shadow-md text-white px-[18px] py-[10px] rounded hover:bg-blue-700 transition duration-300">Sign In</Link>
          </div>
        </>
      )}

      {/* Mobile menu button */}
      <div className="tablet:hidden flex items-center">
        <button className="text-[#2F80ED] hover:text-blue-600 focus:outline-none" onClick={toggleMobileMenu}>
          <i className="fa-solid fa-bars fa-xl"></i>
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} tablet:hidden absolute top-[68px] left-0 w-full bg-white shadow-lg z-10`}>
        <ul className="flex flex-col gap-[20px] text-[16px] text-[#333] p-[20px]">
          {menuLinks.map((link, index) => (
            <NavLinks key={index} to={link.to} title={link.title} />
          ))}
          {isAuthenticated ? (
            <div className="flex gap-[10px] items-center">
              <div className="notification">
                <i className="fa fa-bell text-[#2F80ED] fa-xl"></i>
              </div>
              <div className="profile">
                <img src="profile-picture-url" alt="Profile" className="rounded-full w-[40px] h-[40px]" />
              </div>
            </div>
          ) : (
            <ul className='flex gap-[10px]'>
              <li><Link to="/Register" className="border border-[#2F80ED] text-[#2F80ED] px-[18px] py-[10px] rounded hover:bg-blue-600 hover:text-white transition duration-300" onClick={toggleMobileMenu}>Register</Link></li>
              <li><Link to="/SignIn" className="bg-[#2F80ED] text-white px-[18px] py-[10px] rounded hover:bg-blue-700 transition duration-300" onClick={toggleMobileMenu}>Sign In</Link></li>
            </ul>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
