import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="hidden md:block h-8 w-auto mr-3" />
            <span className="text-[15px] sm:text-lg md:text-xl font-bold">Malabar Educational Charitable Trust</span>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#about" className="text-gray-600 font-medium hover:text-gray-900">About Us</a>
            <a href="#contact" className="text-gray-600 font-medium hover:text-gray-900">Contact Us</a>
          </div>
          <div className="flex items-center md:hidden">
            <IconButton onClick={toggleMenu}>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
          <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact Us</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
