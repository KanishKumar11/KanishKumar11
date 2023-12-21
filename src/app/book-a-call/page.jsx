import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import CalendlyInlineWidget from "@/components/CalendlyInlineWidget";

const BookACall = () => {
  return (
    <div>
      <main className="flex items-center pt-5 text-dark w-full min-h-screen bg-light dark:bg-dark dark:text-light">
        <Layout className="!pt-0 md:!pt-16 sm:!p-8 xl:px-36 ">
          <AnimatedText
            text="Book A Call"
            className="sm:!text-3xl lg:!text-[2.7rem] text-6xl !text-center xl:text-[2.7rem] lg:!text-center md:text-5xl "
          />
          <p className="text-center text-sm mt-5 lg:px-10 px-20">
            Ready to connect? Use the convenient scheduling tool below to book a
            call with me. Whether you have questions about my portfolio, want to
            discuss potential collaborations, or just want to chat about shared
            interests, I'm here for it. Select a time that works for you, and
            let's make it happen. I look forward to our conversation!
          </p>
          <CalendlyInlineWidget />
        </Layout>
      </main>
    </div>
  );
};

export default BookACall;
