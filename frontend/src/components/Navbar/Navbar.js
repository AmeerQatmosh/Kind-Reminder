import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/kricon.png';
const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to check if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#10437D] sticky top-0 z-50 py-0 px-5 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center mr-2">
          <img
            src= {logo}
            alt="king Reminder Home"
            className="h-12 w-20 "
          />
        
        </Link>

        {/* Hamburger Icon (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="text-white sm:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">☰</span>
        </button>

        {/* Navbar Links (visible on large screens) */}
        <div className={`hidden sm:flex space-x-3`}>
          <Link
            to="/calendar"
            className={`text-white text-lg py-2 px-4 ${isActive('/calendar') ? 'border-b-2 border-white' : ''} hover:text-[#ff6347] transition duration-300 no-underline`}
          >
            Calendar
          </Link>
          <Link
            to="/events"
            className={`text-white text-lg py-2 px-4 ${isActive('/events') ? 'border-b-2 border-white' : ''} hover:text-[#ff6347] transition duration-300 no-underline`}
          >
            Events
          </Link>
          <Link
            to="/reminders"
            className={`text-white text-lg py-2 px-4 ${isActive('/reminders') ? 'border-b-2 border-white' : ''} hover:text-[#ff6347] transition duration-300 no-underline`}
          >
            Reminders
          </Link>
          <Link
            to="/tasks"
            className={`text-white text-lg py-2 px-4 ${isActive('/tasks') ? 'border-b-2 border-white' : ''} hover:text-[#ff6347] transition duration-300 no-underline`}
          >
            Tasks
          </Link>
        </div>

        {/* Desktop Button Group */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/signin">
            <button className="bg-transparent border-[0.5px] border-[#558BC7] text-white py-1 px-4 text-sm rounded-full hover:bg-white hover:text-black transition duration-300">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-transparent border-[0.5px] border-[#558BC7] text-white py-1 px-4 text-sm rounded-full hover:bg-white hover:text-black transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible only on small screens) */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#10437D] mt-2`}>
        <Link to="/calendar" className={`block text-white text-lg py-2 px-4 ${isActive('/calendar') ? 'border-b-2 border-white' : ''} hover:text-[#ff6347] transition duration-300 no-underline`}>
          Calendar
        </Link>
        <Link to="/events" className={`block text-white text-lg py-2 px-4 ${isActive('/events') ? 'border-b-2 border-white' : ''} hover:text-[#ff6347] transition duration-300 no-underline`}>
          Events
        </Link>
        <Link to="/reminders" className={`block text-white text-lg py-2 px-4 ${isActive('/reminders') ? 'border-b-2 border-white' : ''} hover:text-[#ff6347] transition duration-300 no-underline`}>
          Reminders
        </Link>
        <Link to="/tasks" className={`block text-white text-lg py-2 px-4 ${isActive('/tasks') ? 'border-b-2 border-white' : ''} hover:text-[#ff6347] transition duration-300 no-underline`}>
          Tasks
        </Link>

        {/* Mobile Button Group */}
        <div className="flex flex-col items-center space-y-2 py-4">
          <Link to="/signin">
            <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg hover:bg-blue-600 transition duration-300">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-[#558BC7] text-white py-2 px-4 w-full rounded-lg hover:bg-[#4a7db0] transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
