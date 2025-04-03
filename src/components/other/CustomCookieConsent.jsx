import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CustomCookieConsent = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("consent");
    setIsVisible(!consent);
  }, []);

  const handleAccept = () => {
    Cookies.set("consent", "true", { expires: 150 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set("consent", "false", { expires: 150 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] max-w-md bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="relative">
        {/* Header with accent color */}
        <div className="h-2 bg-gradient-to-r from-blue-600 to-green-500"></div>

        {/* Content area */}
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2">Cookie Consent</h3>

          <p className="text-gray-700 mb-4 text-sm">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
          </p>

          {showDetails && (
            <div className="mb-4 text-xs text-gray-600 bg-gray-50 p-3 rounded">
              <p className="mb-2">
                <strong>Essential cookies:</strong> Required for basic site functionality.
              </p>
              <p className="mb-2">
                <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.
              </p>
              <p>
                <strong>Marketing cookies:</strong> Allow us to deliver personalized advertisements.
              </p>
            </div>
          )}

          <div className="flex flex-col space-y-3">
            <div className="flex space-x-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 px-4 rounded font-medium hover:opacity-90 transition-opacity"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded font-medium hover:bg-gray-200 transition-colors"
              >
                Decline
              </button>
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors text-center"
            >
              {showDetails ? "Hide details" : "Cookie settings"}
            </button>

            <div className="text-xs text-gray-500 text-center">
              By clicking "Accept All", you consent to our cookie policy.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCookieConsent;
