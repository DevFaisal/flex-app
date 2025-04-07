import React from 'react';
import PageWrapper from '../components/PageWrapper';

const footerRoutes = [
  {
    path: 'terms',
    element: () => PageWrapper({ title: 'Terms', children: <div>Terms and Conditions</div> }),
  },
  {
    path: 'privacy-policy',
    element: () => PageWrapper({ title: 'Privacy Policy', children: <div>Privacy Policy</div> }),
  },
  {
    path: 'legal',
    element: () => PageWrapper({ title: 'Legal', children: <div>Legal</div> }),
  },
  {
    path: 'vulnerability',
    element: () => PageWrapper({ title: 'Vulnerability', children: <div>Vulnerability</div> }),
  },
  {
    path: 'cookies',
    element: () => PageWrapper({ title: 'Cookies', children: <div>Cookies</div> }),
  },
  {
    path: 'modern-slavery',
    element: () => PageWrapper({ title: 'Modern Slavery', children: <div>Modern Slavery</div> }),
  },
  {
    path: 'candidate-privacy',
    element: () =>
      PageWrapper({ title: 'Candidate Privacy', children: <div>Candidate Privacy</div> }),
  },
  {
    path: 'help',
    element: () => PageWrapper({ title: 'Help', children: <div>Help</div> }),
  },
  {
    path: 'live-chat',
    element: () => PageWrapper({ title: 'Live Chat', children: <div>Live Chat</div> }),
  },
  {
    path: 'contact',
    element: () => PageWrapper({ title: 'Contact', children: <div>Contact</div> }),
  },
];

export default footerRoutes;
