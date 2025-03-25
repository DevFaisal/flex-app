import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import logo from "../../assets/logo/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      label: "Calculator",
      link: "calculator",
    },
    {
      label: "Take the Quiz",
      link: "quiz",
    },
    {
      label: "Testimonials",
      link: "testimonials",
    },
    {
      label: "FAQ",
      link: "faq",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollTo = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 bg-transparent z-50`}>
      <div className="flex justify-between items-center max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="z-50">
          <img src={logo} alt="FlexCard Logo" width={80} />
        </Link>

        {/* Mobile menu button */}
        <div className="block md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="flex items-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              onClick={() => handleScrollTo(link.link)}
              className="font-semibold text-white hover:text-white/80 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button label="Check if you qualify" className="ml-4" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 transform z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.link}
                className="text-xl font-medium text-white hover:text-white/80 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button label="Check if you qualify" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
