import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({ position, company, companylink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="captalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companylink}
            target={"_blank"}
            className="text-primaryo capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:!text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative xs:!w-[130%] md:!w-full lg:w-[90%] md:-ml-[10%]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[38px] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[36px] xs:!left-[20px]"
        />
        <ul className="w-full flex-col flex items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Wordpress Developer"
            company="Glaark"
            companyLink="https://web.archive.org/web/20220916044953/https://glaark.com/"
            time="Feb 2022 - OCT 2022"
            address="Amritsar, Punjab, India"
            work="Worked on a team responsible for developing complete website based on wordpress CMS, helped in improving their SEO performance and their link building statergy"
          />
          <Details
            position="Front-end Web Developer Intern"
            company="SuperBeta"
            companyLink="http://superbeta.com/"
            time="May 2023 - June 2023"
            address="India"
            work="Developed responsive web applications using modern front-end technologies. Translated design wireframes into functional interfaces, optimized website performance, and conducted thorough testing. Collaborated effectively in an agile development environment, contributing to sprint planning and leveraging version control systems."
          />
          <Details
            position="Full Stack Web Developer Intern"
            company="Sow Tech"
            companyLink="http://sowtech.in/"
            time="Jan 2024 - July 2024"
            address="India"
            work="Developed full-stack web applications using React, Next.js, Tailwind CSS, and MongoDB. Implemented state management with Zustand, ensured data integrity using Zod, and built responsive, accessible UI components. Collaborated in a remote team environment, contributing to efficient and innovative web solutions."
          />
          <Details
            position="Junior Full Stack Developer"
            company="Sow Tech"
            companyLink="http://sowtech.in/"
            time="July 2024 - Present"
            address="India"
            work="Advanced from internship to full developer role. Continued building complex web applications with enhanced responsibilities. Focused on optimizing application performance, implementing advanced state management techniques, and leading more complex project implementations."
          />
          <Details
            position="Freelance front-end Web Developer"
            company="Self"
            companyLink="/"
            time="June 2023 - Present"
            address="Amritsar, Punjab, India"
            work="Delivering high-quality web solutions across frontend and backend development. Specializing in creating responsive, user-friendly websites using technologies like HTML, CSS, JavaScript, Next.js, MySQL, and WordPress. Committed to meeting client needs through effective communication and timely project delivery."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
