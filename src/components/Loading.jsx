"use client";
import React from "react";
import { Skeleton } from "@mui/material";
import Layout from "@/components/Layout";

const Loading = () => {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen bg-light dark:bg-dark dark:text-light">
        <Layout className="!pt-0 md:!pt-16 sm:!p-8 xl:px-36 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Skeleton className="w-[568px] rounded-full h-[768px]" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <Skeleton className="w-full h-12 rounded-sm" />
              <Skeleton className="w-full h-12 rounded-sm" />
              <Skeleton className="w-full h-12 rounded-sm" />
              <Skeleton className="w-full h-40 mt-10 rounded-sm" />
              <div className="flex items-center self-center mt-2 gap-5 lg:self-center">
                <Skeleton className="w-20 h-10 rounded-md" />
                <Skeleton className="w-20 h-10 rounded-md" />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Loading;
