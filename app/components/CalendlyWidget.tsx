'use client'

import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/angelique-copere-dev/call"
        style={{ height: "700px" }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
