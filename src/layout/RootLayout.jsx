import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/view/Footer';
import HandleBGVideo from '../provider/HandleBGVideo';
import CustomCookieConsent from '../components/other/CustomCookieConsent';

const RootLayout = () => {
  return (
    <div>
      <HandleBGVideo>
        <Outlet />
        <Footer />
        <CustomCookieConsent />
      </HandleBGVideo>
    </div>
  );
};

export default RootLayout;
