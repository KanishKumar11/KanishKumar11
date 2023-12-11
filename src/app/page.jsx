import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import profilePic from "../../public/images/KanishKumar.png";
import Link from "next/link";
import HireMe from "../components/HireMe";
import TransitionEffect from "../components/TransitionEffect";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Projects from "./projects/page.jsx";
import About from "./about/page.jsx";
import { LinkArrow } from "@/components/Icons";
import CalendlyInlineWidget from "../components/CalendlyInlineWidget";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3KBJMZ0LWW"
      />
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3KBJMZ0LWW');
  `}
      </Script>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen bg-light dark:bg-dark dark:text-light">
        <Layout className="!pt-0 md:!pt-16 sm:!p-8 xl:px-36 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Kanish Kumar | Best Freelance Web Developer"
                className="w-full h-auto md:!inline-block lg:hidden  md:w-full "
                priority={true}
                placeholder="blur"
                sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="sm:!text-3xl lg:!text-[2.7rem] text-6xl !text-left xl:text-[2.7rem] lg:!text-center md:text-5xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled Web developer, I am dedicated to turning ideas into
                innovative websites. Explore my latest projects and articles,
                showcasing my expertise in Nextjs and web development.
              </p>
              <div className="flex items-center self-center mt-2 lg:self-center">
                <Link
                  href="#call"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 dark:bg-light dark:text-dark hover:dark:border-light hover:dark:text-light hover:dark:bg-dark md:p-2 md:px-4 md:text-base "
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
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-12 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Kanish Kumar" className="w-full h-auto" />
        </div>
      </main>
      <Projects />
      <About />
      <div className="bg-light dark:bg-dark" id="call">
        <AnimatedText
          text="Book A Call"
          className="sm:!text-3xl lg:!text-[2.7rem] text-6xl !text-center xl:text-[2.7rem] lg:!text-center md:text-5xl "
        />
        <CalendlyInlineWidget />
      </div>
    </>
  );
}
