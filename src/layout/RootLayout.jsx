import React, { use, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Footer from "../components/view/Footer";

const RootLayout = () => {
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    const source = params.get("source");
    if (source) {
      localStorage.setItem("source", source);
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
