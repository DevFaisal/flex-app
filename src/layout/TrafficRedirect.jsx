import { useEffect } from "react";

function TrafficRedirect() {
  console.log("injected....");
  useEffect(() => {
    const isSocialTraffic = () => {
      const referrer = document.referrer ? document.referrer.toLowerCase() : "";
      console.log("Source of traffic:", referrer);
      if (!referrer) return false;

      const socialDomains = [
        "twitter.com",
        "facebook.com",
        "instagram.com",
        "linkedin.com",
        "t.co",
        "pinterest.com",
        "reddit.com",
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
