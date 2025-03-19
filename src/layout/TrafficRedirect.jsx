import { useEffect } from "react";

function TrafficRedirect() {
  useEffect(() => {
    const isSocialTraffic = () => {
      const referrer = document.referrer ? document.referrer.toLowerCase() : "";
      localStorage.setItem("source", referrer);
      if (!referrer) return false;

       const socialDomains = [
         "twitter.com",
         "t.co",
         "facebook.com",
         "instagram.com",
         "linkedin.com",
         "pinterest.com",
         "reddit.com",
         "tiktok.com",
         "snapchat.com",
         "youtube.com",
         "whatsapp.com",
         "t.me",
         "discord.com",
         "quora.com",
       ];

      return socialDomains.some((domain) => referrer.includes(domain));
    };

    if (isSocialTraffic()) {
      window.location.href = "/landing";
    } else {
      window.location.href = "/second";
    }
  }, []);

  return <div className="h-screen">Redirecting...</div>;
}

export default TrafficRedirect;
