import React from "react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center">
        {/* LEFT SIDE */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="menu"
        >
          {/* Placeholder for Menu Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-grow">
          <h1 className="text-xl font-semibold ml-4">
            Maestro Godot Lírico
          </h1>
        </div>
        {/* RIGHT SIDE */}
        <button className="px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Iniciar Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
