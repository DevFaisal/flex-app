import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/view/Navbar';

const FooterRoutes = [
  {
    path: 'terms',
    element: () => PageWrapper('Terms of Service'),
  },
  {
    path: 'privacy-policy',
    element: () => PageWrapper('Privacy Policy'),
  },
  {
    path: 'legal',
    element: () => PageWrapper('Legal'),
  },
  {
    path: 'vulnerability',
    element: () => PageWrapper('Vulnerability'),
  },
  {
    path: 'cookies',
    element: () => PageWrapper('Cookies'),
  },
  {
    path: 'modern-slavery',
    element: () => PageWrapper('Modern Slavery'),
  },
  {
    path: 'candidate-privacy',
    element: () => PageWrapper('Candidate Privacy'),
  },
  {
    path: 'help',
    element: () => PageWrapper('Help'),
  },
  {
    path: 'live-chat',
    element: () => PageWrapper('Live Chat'),
  },
  {
    path: 'contact',
    element: () => PageWrapper('Contact'),
  },
];

export default FooterRoutes;

function PageWrapper(title) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-r from-[#0569E8] to-[#76D232]">
      <Navbar />
      <h1 className="text-white font-bold text-3xl">{title}</h1>
      <p className="text-gray-200">This is the {title} page.</p>
    </div>
  );
}
