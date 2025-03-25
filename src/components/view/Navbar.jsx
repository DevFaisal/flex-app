import React, { useState } from "react";
import Button from "../ui/Button";
import logo from "../../assets/logo/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center max-w-9xl mx-auto px-4 sm:px-6 md:px-10 lg:px-15 py-4">
        <img src={logo} alt="" width={80} className="z-10" />

        {/* Mobile menu button */}
        <div className="block md:hidden z-10">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2  rounded text-white">
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>

        {/* Desktop button */}
        <div className="hidden md:block">
          <Button label={"Check if you qualify"} />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden  ">
          <div className="flex justify-center py-2">
            <Button label={"Check if you qualify"} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
