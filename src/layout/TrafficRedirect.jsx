import { useEffect } from "react";

function TrafficRedirect() {
  useEffect(() => {
    const isSocialTraffic = () => {
      const referrer = document.referrer ? document.referrer.toLowerCase() : "";

      if (!referrer) return false;

      localStorage.setItem("source", referrer);

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
      window.location.href = "/social";
    } else {
      window.location.href = "/organic";
    }
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <h2>Redirecting...</h2>
    </div>
  );
}

export default TrafficRedirect;
