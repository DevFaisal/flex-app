import React, { use, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/view/Navbar";
import Footer from "../components/view/Footer";

const RootLayout = () => {
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    const utm_source = params.get("utm_source");
    if (utm_source) {
      localStorage.setItem("utm_source", utm_source);
    }
  }, []);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
