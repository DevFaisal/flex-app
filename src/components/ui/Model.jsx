import React, { useEffect, useState } from "react";

const Modal = ({ title, children, time = 4 }) => {
  const [isOpen, setIsopen] = useState(false);
  // Close modal when Escape key is pressed
  function onClose() {
    setIsopen(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsopen(true);
    }, time * 1000);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800/50 z-50 backdrop-blur-xs"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title || "Modal"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close">
            X
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
