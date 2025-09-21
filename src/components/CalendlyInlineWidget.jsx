"use client";
import { useEffect } from "react";

const CalInlineWidget = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;

    script.onload = () => {
      // Initialize Cal embed after script loads
      if (window.Cal) {
        window.Cal("init", {
          origin: "https://app.cal.com"
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="h-auto mt-5">
      <iframe
        src="https://cal.com/kanishkumar/30min"
        className="h-[680px] lg:h-[950px] lg:mt-5 rounded-xl w-full"
        style={{
          minWidth: "320px",
          borderRadius: "20px",
          border: "none"
        }}
        loading="lazy"
        title="Book a call with Kanish Kumar"
      />
    </div>
  );
};

export default CalInlineWidget;
