import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

const CustomCookieConsent = () => {
  return (
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
      We use cookies and collect personal data to provide you with the best possible experience on our website. Your
      privacy matters - by clicking "Accept" you agree to our use of cookies and data collection practices. You can
      review our privacy policy for more details.
    </CookieConsent>
  );
};

export default CustomCookieConsent;
