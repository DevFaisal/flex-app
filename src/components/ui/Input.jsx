import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div>
      <h6>{label}</h6>
      <input
        className="w-full medium bg-[#F2F4F8] px-4 py-3 rounded-md outline-none appearance-none shadow-[0px_2px_0px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        {...props}
      />
    </div>
  );
};

export default Input;
