import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/view/Footer";
import CookieConsent, { Cookies } from "react-cookie-consent";

const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="myConcent"
        style={{ background: "#2B373B", padding: "20px" }}
        buttonStyle={{ background: "white", padding: "10px 20px" }}
        declineButtonStyle={{ background: "gray", padding: "10px 20px" }}
        expires={150}
        setDeclineCookie={true}
        onAccept={() => {
          Cookies.set("myConcent", "true", { expires: 150 });
        }}
        onDecline={() => {
          Cookies.set("myConcent", "false", { expires: 150 });
        }}
      >
        This website uses will store your personal information like email and name to enhance your experience. By
        clicking "Accept", you consent to the use of ALL cookies.
      </CookieConsent>
    </div>
  );
};

export default RootLayout;
