import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/view/Footer';
import HandleBGVideo from '../provider/HandleBGVideo';
import CustomCookieConsent from '../components/other/CustomCookieConsent';
import { useNewUserStore } from '../store/global.store';

const RootLayout = () => {
  const fetchTheNewNumber = useNewUserStore((state) => state.fetchTheNewNumber);
  const isNewNumberGenerated = useNewUserStore((state) => state.isNewNumberGenerated);

  useEffect(() => {
    if (!isNewNumberGenerated) {
      fetchTheNewNumber();
    }
  }, [isNewNumberGenerated]);

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
