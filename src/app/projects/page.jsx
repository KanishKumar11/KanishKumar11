"use client";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import project1 from "@/../public/images/projects/project-1.webp";
import project2 from "@/../public/images/projects/project-2.webp";
import project3 from "@/../public/images/projects/project-3.webp";
import project4 from "@/../public/images/projects/project-4.webp";
import project5 from "@/../public/images/projects/project-5.webp";
import project6 from "@/../public/images/projects/project-6.webp";
import project7 from "@/../public/images/projects/project-7.webp";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiArrowDropRightFill } from "react-icons/ri";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex relative items-center justify-between rounded-3xl p-12 border rounded-br-2xl border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 md:max-w-[90vw]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <div className="absolute top-10 right-0 -z-20 w-[95%] h-[80%] rounded-[2.5rem] bg-orange-500 rounded-br-3xl dark:bg-orange-500 xs:-right-2 sm:h-[102%] backdrop:blur-3xl blur-3xl xs:w-full xs:rounded-[1.5rem]" />

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
        <span className="text-primaryo font-medium text-xl dark:text-primaryDark xs:text-base">
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
const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full h-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:bg-dark dark:border-light xs:p-4 md:max-w-[90vw]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] md:h-[102%] xs:rounded-[1.5rem] " />
      <div className="absolute top-10 right-0 -z-20 w-[95%] h-[80%] rounded-[2.5rem] bg-orange-500 rounded-br-3xl dark:bg-orange-500 xs:-right-2 sm:h-[102%] backdrop:blur-3xl blur-3xl xs:w-full xs:rounded-[1.5rem]" />

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
        <span className="text-primaryo font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
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
        <p className="my-2 font-medium dark:text-light sm:text-sm flex-wrap">
          {summary}
        </p>
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink1, setSelectedLink1] = useState("");
  const [selectedLink2, setSelectedLink2] = useState("");

  const FullStackProject = ({
    type,
    title,
    summary,
    img,
    linkAdmin,
    linkStore,
    githubAdmin,
    githubStore,
  }) => {
    const handleLinks = (source) => {
      if (source === "github") {
        setSelectedLink1(githubAdmin);
        setSelectedLink2(githubStore);
      } else if (source === "preview") {
        setSelectedLink1(linkAdmin);
        setSelectedLink2(linkStore);
      } else {
        return null;
      }
      setIsModalOpen(true);
    };
    return (
      <article className="w-full flex relative items-center justify-between rounded-3xl p-12 border rounded-br-2xl border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 md:max-w-[90vw]">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
        <div className="absolute top-10 right-0 -z-20 w-[95%] h-[80%] rounded-[2.5rem] bg-orange-500 rounded-br-3xl dark:bg-orange-500 xs:-right-2 sm:h-[102%] backdrop:blur-3xl blur-3xl xs:w-full xs:rounded-[1.5rem]" />

        <div
          onClick={() => handleLinks("preview")}
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
        </div>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primaryo font-medium text-xl dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <div
            onClick={() => handleLinks("preview")}
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
              {title}
            </h2>
          </div>
          <p className="my-2 font-medium dark:text-light sm:text-sm flex-wrap">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <div
              onClick={() => handleLinks("github")}
              className="w-10 cursor-pointer"
            >
              <GithubIcon />
            </div>
            <div
              onClick={() => handleLinks("preview")}
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base cursor-pointer"
            >
              Visit Project
            </div>
          </div>
        </div>
      </article>
    );
  };
  return (
    <>
      <Head>
        <title>Kanish Kumar | Projects Page</title>
        <meta
          name="description"
          content="Kanish Kumar - I'm freelance web developer"
        />
      </Head>
      <main className="w-full flex flex-col items-center justify-center dark:text-light bg-light dark:bg-dark">
        <Layout className="pt-16 sm:!px-4">
          <AnimatedText
            text="My Projects"
            className=" xs:!text-4xl text-7xl sm:text-6xl lg:text-7xl sm:mb-8  mb-16 "
          />
          <AnimatedText
            className=" xs:!text-3xl text-5xl sm:text-4xl lg:text-5xl sm:mb-8  mb-16 "
            text="imagination Trumps Knowledge!"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 md:max-w-[90vw]">
              <FullStackProject
                title="Dual-Front E-commerce: User Store & Admin Dashboard"
                summary="This project showcases the integration of cutting-edge technologies to deliver a robust, scalable, and aesthetically pleasing e-commerce solution. Explore the seamless synergy between ReactJS and NextJS, coupled with the responsive design facilitated by Tailwind CSS and Shadcn. The backend leverages the power of Prisma with MySQL, ensuring efficient data management and retrieval. Whether you're a customer navigating the store or an admin streamlining operations, this project exemplifies the synergy of modern web development technologies."
                linkAdmin="https://ecommerce-admin-kanishkumar11.vercel.app/"
                linkStore="https://ecommerce-store-kanishkumar11.vercel.app/"
                type="E-commerce Platform with Dual Frontends"
                img={project7}
                githubAdmin="https://github.com/KanishKumar11/ecommerce-admin"
                githubStore="https://github.com/KanishKumar11/ecommerce-store"
              />
              {isModalOpen && (
                <div className="fixed z-50 backdrop:blur-3xl inset-0 w-full h-full bg-black/50 text-black flex items-center justify-center">
                  <div className=" flex flex-col relative rounded-lg shadow-xl p-10 py-20 bg-slate-50 z-50 items-start font-medium transition-all translate-x-0">
                    <p className="text-2xl font-bold mb-10">Choose a link:</p>
                    <Link
                      target="_blank"
                      href={selectedLink1}
                      className="hover:scale-[105%] flex gap-1 items-center transition-transform"
                    >
                      <RiArrowDropRightFill />
                      Admin Dashboard
                    </Link>
                    <Link
                      target="_blank"
                      href={selectedLink2}
                      className="hover:scale-[105%] flex gap-1 items-center transition-transform"
                    >
                      <RiArrowDropRightFill />
                      Store Frontend
                    </Link>

                    <button
                      className="absolute top-2 h-5 w-5 text-black/80 right-2 font-extrabold"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <IoCloseCircleOutline height="20px" width="20px" />
                    </button>
                  </div>
                </div>
              )}
            </div>
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
                link="https://bank-landing-page-kanishkumar11.vercel.app/"
                type="Landing Page"
                img={project2}
                summary="Explore the perfect blend of technology and aesthetics as ReactJS drives the dynamic frontend, while Tailwind CSS ensures a fully responsive and visually captivating design. Witness the future of online banking unfold in real-time as users navigate an interface that adapts flawlessly across devices, providing an optimal experience for all clients. This project serves as a testament to the power of React and Tailwind CSS in creating a modern and functional banking landing page that sets a new standard for user experience in the digital age."
                github="https://github.com/KanishKumar11/bank-landing-page/"
              />
            </div>
            <div className="col-span-6 md:col-span-12 md:max-w-[90vw]">
              <Project
                title="E-learning Landing Page EduWeb"
                link="https://kanish-e-learn.netlify.app/"
                type="Landing Page"
                summary="EduWeb is a dynamic E-learning Landing Page crafted with Next.js, React, and Tailwind CSS. This project showcases my proficiency in front-end development, leveraging the power of React for interactive user interfaces, Next.js for seamless navigation, and Tailwind CSS for a modern and responsive design. The EduWeb landing page is designed to provide an engaging and user-friendly experience for learners, featuring intuitive navigation and a visually appealing layout. Through this project, I demonstrate my skills in creating compelling web solutions that enhance the online education experience. "
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
                link="https://kanishkumar11.github.io/portfolio-website/"
                type="Portfolio Website"
                img={project3}
                github="https://github.com/KanishKumar11/portfolio-website"
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
