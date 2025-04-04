import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CustomCookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('consent');
    setIsVisible(!consent);
  }, []);

  const handleAcceptAll = () => {
    Cookies.set('consent', 'true', { expires: 150 });
    setIsVisible(false);
  };

  const handleReject = () => {
    Cookies.set('consent', 'false', { expires: 150 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="fixed inset-0 z-50 flex justify-end items-end md:items-end p-0 md:p-8 bg-black/40">
      <div className="bg-white w-full md:max-w-sm rounded-t-2xl md:rounded-2xl shadow-lg md:mb-4 md:mr-4">
        <div className="p-6">
          <h2 className="text-md font-bold mb-4">Choose your cookies</h2>

          <p className="text-gray-700 text-xs mb-4">
            Cookies help us to enhance your experience, tailor ads to your interests, and improve
            our website.
          </p>

          <button
            className="text-gray-800 text-xs underline mb-4 block"
            onClick={() => window.open('#', '_blank')}
          >
            Learn more and manage
          </button>

          <div className="flex flex-col gap-3">
            <button className="btn-black" onClick={handleAcceptAll}>
              Accept all
            </button>
            <button className="btn-white" onClick={handleReject}>
              Reject non-essential cookies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// +91 8825046934 ->

export default CustomCookieConsent;
