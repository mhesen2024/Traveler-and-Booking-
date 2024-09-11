
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/organisem/Navbar'; 

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      <main className="flex-1">
        <Outlet /> 
      </main>
      
    </div>
  );
}
