import React from "react";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router";
import logo from "../../assets/logo/logo.svg";
import playsoreicon from "../../assets/icons/playstore.svg";
import appstoreicon from "../../assets/icons/appstore.svg";
import flexicon from "../../assets/icons/flexiconlighter.svg";

const Footer = () => {
  const legalPrivacy = [
    { name: "Website Terms", link: "/terms" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Legal Agreements", link: "/legal" },
    { name: "Cookie Policy", link: "/cookies" },
    { name: "Customer Vulnerability", link: "/vulnerability" },
    { name: "UK Modern Slavery Policy", link: "/modern-slavery" },
    { name: "Data Privacy for Candidates", link: "/candidate-privacy" },
  ];

  const socialLinks = [
    { icon: FaYoutube, href: "https://youtube.com/flexcard" },
    { icon: FaFacebookF, href: "https://facebook.com/flexcard" },
    { icon: FaInstagram, href: "https://instagram.com/flexcard" },
    { icon: FaLinkedinIn, href: "https://linkedin.com/company/flexcard" },
  ];

  return (
    <footer className="relative bg-[#1A222B] text-white py-12 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Logo Section */}
        <div className="mb-8">
          <img src={logo} width={90} alt="FlexCard Logo" className="mb-6" />
        </div>

        {/* Footer Columns */}
        <div className="flex justify-between flex-wrap gap-8 mb-8">
          {/* Legal & Policy Column */}
          <div>
<<<<<<< HEAD
            <h2 className="font-bold text-xl mb-6">Legal & Policy</h2>
            {legalPrivacy.map((link, idx) => (
              <Link key={idx} to={link.link} className="block py-1 text-gray-400 hover:text-white transition-colors">
                {link.name}
=======
            <h2 className="font-bold  mb-6">Legal & Policy</h2>
            {legalPrivacy.map((link, idx) => (
              <Link key={idx} to={link.link} className="block py-1 text-gray-400 hover:text-white transition-colors">
                <h6>{link.name}</h6>
>>>>>>> testing
              </Link>
            ))}
          </div>

          {/* Customer Support Column */}
          <div>
<<<<<<< HEAD
            <h2 className="font-bold text-xl mb-6">Customer Support</h2>
            <Link to="/help" className="block py-1 text-gray-400 hover:text-white transition-colors">
              Help Centre
            </Link>
            <Link to="/live-chat" className="block py-1 text-gray-400 hover:text-white transition-colors">
              Live Chat in the FlexCard App
            </Link>
            <Link to="/contact" className="block py-1 text-gray-400 hover:text-white transition-colors">
              Email Us
=======
            <h2 className="font-bold  mb-6">Customer Support</h2>
            <Link to="/help" className="block py-1 text-gray-400 hover:text-white transition-colors">
              <h6>Help Centre</h6>
            </Link>
            <Link to="/live-chat" className="block py-1 text-gray-400 hover:text-white transition-colors">
              <h6>Live Chat in the FlexCard App</h6>
            </Link>
            <Link to="/contact" className="block py-1 text-gray-400 hover:text-white transition-colors">
              <h6>Email Us</h6>
>>>>>>> testing
            </Link>
          </div>

          {/* Mobile App Column */}
          <div>
<<<<<<< HEAD
            <h2 className="font-bold text-xl mb-6">Flex Mobile App</h2>
=======
            <h2 className="font-bold  mb-6">Flex Mobile App</h2>
>>>>>>> testing
            <div className="flex gap-2">
              <a href="https://apps.apple.com/app/flexcard" target="_blank" rel="noopener noreferrer">
                <img
                  src={appstoreicon}
                  alt="Get it on App Store"
                  className="h-10 hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.flexcard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={playsoreicon}
                  alt="Get it on Google Play"
                  className="h-10 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="flex flex-col gap-2 text-sm text-gray-400 max-w-7xl">
            <p>
              <span className="text-white">© {new Date().getFullYear()} FlexCard Ltd. All rights reserved. -</span>{" "}
=======
        <div className="flex flex-col md:flex-row justify-between items-end minute">
          <div className="flex  flex-col gap-2 text-gray-400 max-w-7xl">
            <p>
              <span className="text-white ">© {new Date().getFullYear()} FlexCard Ltd. All rights reserved. -</span>
>>>>>>> testing
              "Flex: Pay For What You Owe" is a registered trademark of FlexCard Ltd.
            </p>
            <p>For further details about our policies and services, please refer to the links above or contact us.</p>
            <p>
              FlexCard Ltd (Company Number: XXXXXX) is authorised and regulated by the Financial Conduct Authority (FCA)
              under limited permissions for consumer lending (Firm Reference Number: XXXXXXX).
            </p>
            <p>
              FlexCard Ltd operates under FCA oversight for specific regulated activities, including consumer credit.
              This means we adhere to UK financial regulations while providing fair and transparent lending solutions.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 md:mt-0">
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Icon */}
        <img src={flexicon} alt="flexicon" className="absolute top-10 right-20 hidden md:block" />
      </div>
    </footer>
  );
};

export default Footer;
