import React, { useState } from "react";

const Tooltip = ({ Icon, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer p-1 rounded-full bg-gray-100"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {Icon}
      </div>

      {isVisible && (
        <div className="absolute z-50 w-48 px-2 py-1 -translate-x-1/2 left-1/2 bottom-full mb-1">
          <div className="relative bg-gray-900 text-white text-sm rounded-md p-2 shadow-lg">
            {text}
            <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
