import React from "react";
// import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";
import Link from "next/link";

const notFound = () => {
  return (
    <>
      {/* <TransitionEffect /> */}
      <main className="flex items-center text-dark w-full min-h-[75vh] bg-light dark:bg-dark dark:text-light">
        <Layout className="!pt-0 md:!pt-16 h-full sm:!p-8 xl:px-36 ">
          <div className="text-center flex-col h-full flex items-center justify-center">
            <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-200">
              Oops! Looks like you're lost.
            </p>
            <div className="animate-bounce">
              <svg
                className="mx-auto h-16 w-16 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <p className="mt-4 gap-2 flex">
              Let's get you back
              <Link
                href="/"
                className="text-red-500 hover:scale-[105%] transition"
              >
                home
              </Link>
              .
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default notFound;
