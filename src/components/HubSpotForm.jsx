import { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    if (!document.querySelector("#hubspot-script")) {
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/embed/242302234.js";
      script.defer = true;
      script.id = "hubspot-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="a6f0538c-2ed5-4596-9496-b0c695bec8dd"
        data-portal-id="242302234"
      ></div>
    </div>
  );
};

export default HubSpotForm;
