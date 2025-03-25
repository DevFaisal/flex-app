import React from "react";
import logo from "../assets/ui/logo.svg";

const Index = () => {
  return (
    <div className="fixed w-full h-screen bg-linear-to-r from-[#0569E8] to-[#76D232] z-[9999]">
      <div className="flex gap-9 flex-col justify-center items-center h-full text-white">
        <img src={logo} alt="logo" height={300} width={400} />
        <h3 className="text-4xl font-light">Pay For What You Owe</h3>
      </div>
    </div>
  );
};

export default Index;
