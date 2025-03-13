import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../ui/Button";
import logo from "../../assets/new-logo.svg";
import playsoreicon from "../../assets/icons/playstore.svg";
import appstoreicon from "../../assets/icons/appstore.svg";

const Footer = () => {
  return (
    <footer className="bg-[#21272A] text-white py-12 px-6">
      {/* Logo and newsletter section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-8">
        <div className="mb-6 md:mb-0">
          <img src={logo} width={90} alt="" srcset="" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="pl-10 px-4 py-3 rounded-md bg-white text-gray-800 min-w-[300px]"
            />
          </div>
          <Button label={"Subscribe"} type={"secondary"} />
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Four columns section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* Column One */}
        <div>
          <h2 className="font-bold text-xl mb-6">Column One</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Twenty One
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Thirty Two
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Fourty Three
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Fifty Four
              </a>
            </li>
          </ul>
        </div>

        {/* Column Two */}
        <div>
          <h2 className="font-bold text-xl mb-6">Column Two</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Sixty Five
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Seventy Six
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Eighty Seven
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Ninety Eight
              </a>
            </li>
          </ul>
        </div>

        {/* Column Three */}
        <div>
          <h2 className="font-bold text-xl mb-6">Column Three</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                One Two
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Three Four
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Five Six
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Seven Eight
              </a>
            </li>
          </ul>
        </div>

        {/* Column Four */}
        <div>
          <h2 className="font-bold text-xl mb-6">Column Four</h2>
          <div className="space-y-6">
            <div className="flex">
              <img
                src={playsoreicon}
                alt="Get it on Google Play"
                className="h-10"
              />
              <img
                src={appstoreicon}
                alt="Get it on App Store"
                className="h-10"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Join Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-300">
                  <FaYoutube size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">CompanyName @ 202X. All rights reserved.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gray-300">
            Eleven
          </a>
          <a href="#" className="hover:text-gray-300">
            Twelve
          </a>
          <a href="#" className="hover:text-gray-300">
            Thirteen
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
