import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Menu state
  const [isDialogVisible, setIsDialogVisible] = useState(false); // Gallery dialog visibility
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    navigate('/'); // Navigate to the home route
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openGalleryDialog = () => {
    setIsDialogVisible(true); // Show Gallery dialog
    setIsOpen(false); // Close the mobile menu if open
  };

  const closeGalleryDialog = () => {
    setIsDialogVisible(false); // Close the gallery dialog
  };

  return (
    <>
      <nav className="relative w-full bg-white shadow-md">
        <div className="flex justify-between items-center max-w-7xl w-11/12 mx-auto py-4">
          {/* Left section */}
          <h1
            className="text-3xl font-bold text-slate-800 cursor-pointer"
            onClick={handleClick}
          >
            IIPC <span className="text-blue-600">52</span>
          </h1>

          {/* Menu Button for Small Screens */}
          <button
            className="md:hidden text-slate-700 focus:outline-none"
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
          <div className="hidden md:flex flex-row items-center space-x-4">
            <Link
              to="/"
              className="text-lg font-normal text-slate-700 hover:text-blue-600 px-4 py-2 rounded transition-all"
            >
              Home
            </Link>
            <button
              className="text-lg font-normal text-slate-700 hover:text-blue-600 px-4 py-2 rounded transition-all"
              onClick={openGalleryDialog} // Open dialog on click
            >
              Gallery
            </button>
            <Link
              to="/Participant"
              className="text-lg font-normal text-slate-700 hover:text-blue-600 px-4 py-2 rounded transition-all"
            >
              Participants
            </Link>
            <Link
              to="/Volunteers"
              className="text-lg font-normal text-slate-700 hover:text-blue-600 px-4 py-2 rounded transition-all"
            >
              Organizers
            </Link>
          </div>
        </div>

        {/* Floating Mobile Menu */}
        <div
          className={`absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'
            } md:hidden z-50`}
        >
          <Link
            to="/"
            className="block text-lg font-normal text-slate-700 hover:text-blue-600 px-4 py-2 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <button
            className="block text-lg font-normal text-slate-700 hover:text-blue-600 px-4 py-2 transition-all"
            onClick={openGalleryDialog}
          >
            Gallery
          </button>
          <Link
            to="/Participant"
            className="block text-lg font-normal text-slate-700 hover:text-blue-600 px-4 py-2 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Participants
          </Link>
          <Link
            to="/Volunteers"
            className="block text-lg font-normal text-slate-700 hover:text-blue-600 px-4 py-2 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Organizers
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

      {/* Background blur and Image Slider when dialog is visible */}
      {isDialogVisible && (
        <ImageSlider onClose={closeGalleryDialog} /> // Pass the close function as prop
      )}
    </>
  );
}
