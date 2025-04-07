import React, { useEffect } from 'react';
import Navbar from '../../components/view/Navbar';

function PageWrapper({ title, children }) {
  useEffect(() => {
    // Update the document title when the title prop changes
    document.title = title;
  }, [title]);

  useEffect(() => {
    // Smoothly scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#0569E8] to-[#76D232]">
      {/* <div className="flex-none bg-green-500 p-4 h-10">
        <Navbar />
      </div> */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

export default PageWrapper;
