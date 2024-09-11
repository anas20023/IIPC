import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    navigate('/'); // Navigate to the home route
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative w-full bg-white shadow-sm">
      <div className="flex justify-between items-center max-w-7xl w-11/12 mx-auto py-4">
        {/* Left section */}
        <h1 className="text-3xl font-bold text-slate-800 cursor-pointer" onClick={handleClick}>
          IIPC <span className="text-blue-600">52</span>
        </h1>

        {/* Menu Button for Small Screens */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Items for Large Screens */}
        <div className="hidden md:flex flex-row items-center space-x-6">
        <Link
            to="/"
            className="text-lg font-normal text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded transition-all shadow-sm"
          >
            Home
          </Link>
          <Link
            to="/Participant"
            className="text-lg font-normal text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded transition-all shadow-sm"
          >
            Participants
          </Link>
          <Link
            to="Volunteers"
            className="text-lg font-normal text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded transition-all shadow-sm"
          >
            Volunteers
          </Link>
        </div>
      </div>

      {/* Floating Mobile Menu */}
      <div
        className={`absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'} md:hidden z-50`}
      >
         <Link
          to="/"
          className="block text-lg font-normal text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 transition-all shadow-sm"
          onClick={() => setIsOpen(false)} // Close menu on click
        >
          Home
        </Link>
        <Link
          to="/Participant"
          className="block text-lg font-normal text-white bg-blue-600 hover:bg-blue-500 px-4 py-2  transition-all shadow-sm"
          onClick={() => setIsOpen(false)} // Close menu on click
        >
          Participants
        </Link>
        <Link
          to="Volunteers"
          className="block text-lg font-normal text-white bg-blue-600 hover:bg-blue-500 px-4 py-2  transition-all shadow-sm"
          onClick={() => setIsOpen(false)} // Close menu on click
        >
          Volunteers
        </Link>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
