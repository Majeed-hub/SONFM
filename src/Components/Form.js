import { useEffect } from "react";
import React from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.charset = "utf-8";

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "47720628",
          formId: "8004e1e3-ecf8-4c81-bd5c-6703706a6f2f",
          target: "#hubspotForm",
        });
      }
    };

    document.body.appendChild(script);

    // Optional cleanup to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubSpotForm;
