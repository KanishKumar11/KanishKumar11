// components/CalendlyInlineWidget.js
"use client";
import { useEffect } from "react";

const CalendlyInlineWidget = () => {
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
    <div className="h-auto">
      <div
        className="calendly-inline-widget h-[680px] lg:h-[950px] lg:mt-5 rounded-xl"
        data-url="https://calendly.com/kanishkumar/meet"
        style={{ minWidth: "320px", borderRadius: "20px" }}
      ></div>
    </div>
  );
};

export default CalendlyInlineWidget;
