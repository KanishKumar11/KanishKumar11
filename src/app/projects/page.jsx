"use client";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "@/../public/images/projects/project-1.png";
import project2 from "@/../public/images/projects/project-2.png";
import project3 from "@/../public/images/projects/project-3.png";
import project4 from "@/../public/images/projects/project-4.png";
import project5 from "@/../public/images/projects/project-5.png";
import project6 from "@/../public/images/projects/project-6.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex relative items-center justify-between rounded-3xl p-12 border rounded-br-2xl border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 md:max-w-[90vw]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto"
          placeholder="blur"
          loading="lazy"
          sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium dark:text-light sm:text-sm flex-wrap">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:bg-dark dark:border-light xs:p-4 md:max-w-[90vw]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] md:h-[102%] xs:rounded-[1.5rem] " />

      <Link
        href={link}
        target="_blank"
        className="w-full  cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          placeholder="blur"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light dark:border-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Kanish Kumar | Projects Page</title>
        <meta
          name="description"
          content="Kanish Kumar - I'm freelance web developer"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light bg-light dark:bg-dark">
        <Layout className="pt-16 md:!px-8 sm:!px-4">
          <AnimatedText
            text="imagination Trumps Knowledge!"
            className=" xs:!text-4xl text-7xl sm:text-6xl lg:text-7xl sm:mb-8  mb-16 "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 md:max-w-[90vw]">
              <FeaturedProject
                title="Modern Web3 Metaverse landing page"
                summary="This Modern Web3 Metaverse Landing Page demonstrates my expertise in utilizing cutting-edge technologies. With Next.js 13, I built a performant web application with smooth navigation. Using Tailwind CSS, I crafted a visually stunning interface with customizable components. Framer Motion added engaging animations for a dynamic user experience. The landing page is responsive, providing a consistent look across devices. This project highlights my ability to create outstanding interfaces using the latest front-end tools and frameworks."
                link="https://kanishkumar11.github.io/metaverse-landing-page/"
                type="Featured Project"
                img={project1}
                github="https://github.com/KanishKumar11/metaverse-landing-page/"
              />
            </div>
            <div className="col-span-6 md:col-span-12 md:max-w-[90vw]">
              <Project
                title="Modern Bank landing Page"
                link="https://kanishkumar11.github.io/bank-landing-page/"
                type="Landing Page"
                img={project2}
                github="https://github.com/KanishKumar11/bank-landing-page/"
              />
            </div>
            <div className="col-span-6 md:col-span-12 md:max-w-[90vw]">
              {" "}
              <Project
                title="E-learning Landing Page EduWeb"
                link="https://kanish-e-learn.netlify.app/"
                type="Landing Page"
                img={project6}
                github="https://github.com/KanishKumar11/e-learn"
              />
            </div>
            <div className="col-span-12 md:max-w-[90vw]">
              <FeaturedProject
                title="Modern Resume Website"
                summary="This website is built using HTML, CSS, and JavaScript to create an interactive online resume. With HTML, I structured the content, while CSS provided styling and visual presentation. JavaScript added interactivity like smooth scrolling and animated transitions. The website is optimized for different devices, adhering to web standards and best practices. "
                link="https://kanishkumar11.github.io/resume/"
                type="Resume"
                img={project4}
                github="https://github.com/KanishKumar11/resume/"
              />
            </div>
            <div className="col-span-6 md:col-span-12 md:max-w-[90vw]">
              {" "}
              <Project
                title="Sudoku Game"
                link="https://kanishkumar11.github.io/sudoku/"
                type="Game"
                img={project5}
                github="https://github.com/KanishKumar11/sudoku"
              />
            </div>
            <div className="col-span-6 md:col-span-12 md:max-w-[90vw]">
              {" "}
              <Project
                title="Portfolio Website Design"
                link="https://kanishkumar11.github.io/portfolio/"
                type="Portfolio Website"
                img={project3}
                github="https://github.com/KanishKumar11/portfolio/"
              />
            </div>
          </div>
        </Layout>
        <div className=" xs:!text-4xl mb-16 " />
        <div className="sm:!text-6xl lg:text-7xl sm:mb-8  mb-16 " />
      </main>
    </>
  );
};

export default Projects;
