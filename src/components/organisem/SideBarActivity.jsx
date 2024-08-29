import React from "react";
import { Link } from "react-router-dom";

export default function SideBarActivity() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed z-30 h-full bg-blue-500 w-56 lg:w-1/5 p-4">
        <h1 className="text-white text-2xl font-bold mb-8">Menu</h1>
        <ul className="space-y-4">
          <li>
            <Link to="/add-hotel" className="text-white block">
              Add Hotel
            </Link>
          </li>
          <li>
            <Link to="/add-city" className="text-white block">
              Add City
            </Link>
          </li>
          <li>
            <Link to="/add-country" className="text-white block">
              Add Country
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-56 lg:ml-[20%]">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p>Welcome to the admin dashboard!</p>
      </div>
    </div>
  );
}
