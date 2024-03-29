"use client";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import profilePic from "../../public/KanishKumar.webp";
import Link from "next/link";
import HireMe from "../components/HireMe";
import lightBulb from "../../public/miscellaneous_icons_1.svg";
import { LinkArrow } from "@/components/Icons";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import Cilentele from "@/components/Clientele";

const DynamicProjects = dynamic(() => import("./projects/page.jsx"), {
  loading: () => <Loading />,
});
const DynamicAbout = dynamic(() => import("./about/page.jsx"), {
  loading: () => <Loading />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen relative z-10 dark:text-light">
        <Layout className="!pt-0 md:!pt-16 sm:!p-8 xl:px-36 relative">
          <div className="flex items-center justify-between w-full lg:flex-col relative z-10">
            <div className="w-1/2 md:w-full z-10 relative">
              <Image
                src={profilePic}
                alt="Kanish Kumar | Best Freelance Web Developer"
                className="w-full relative h-auto md:!inline-block lg:hidden z-50 md:w-full"
                priority={true}
                placeholder="blur"
                sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw"
              />
            </div>
            <div className="z-10 relative w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <div className="h-full relative w-full flex items-center self-center flex-col min-h-[265px] z-10">
                <AnimatedText
                  text="Turning Vision Into Reality With Code And Design."
                  className="sm:!text-3xl relative z-10 lg:!text-[2.7rem] text-6xl !text-left xl:text-[2.7rem] lg:!text-center md:text-5xl min-h-[130px]"
                />

                <p className="my-4 text-base relative font-medium md:text-sm sm:text-xs z-10 block ">
                  As a skilled Web developer, I am dedicated to turning ideas
                  into innovative websites. Explore my latest projects and
                  articles, showcasing my expertise in Nextjs and web
                  development.
                </p>
                <div className="flex items-center self-center mt-2 lg:self-center relative z-10">
                  <Link
                    href="/book-a-call"
                    className="flex relative z-10 items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 dark:bg-light dark:text-dark hover:dark:border-light hover:dark:text-light hover:dark:bg-dark md:p-2 md:px-4 md:text-base "
                  >
                    Book A Call <LinkArrow className="!w-4 mb-2 ml-1" />
                  </Link>

                  <Link
                    href="mailto:hey@kanishkumar.in"
                    target={"_blank"}
                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-28 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Kanish Kumar" className="w-full h-auto" />
        </div>
      </main>
      <Cilentele />
      <DynamicProjects />
      <DynamicAbout />
    </>
  );
}
