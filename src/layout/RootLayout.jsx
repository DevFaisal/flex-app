import React from "react";
import { Outlet } from "react-router";
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
