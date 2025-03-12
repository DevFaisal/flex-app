import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/view/Navbar";
import Footer from "../components/view/Footer";

const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
