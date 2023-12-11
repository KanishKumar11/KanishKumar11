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
            className="text-primary capitalize dark:text-primaryDark"
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
            work="Collaborated with the development team to design and develop the company's website, implementing modern front-end technologies.
            Translated UI/UX design wireframes into functional and responsive web applications.
            Developed and maintained website features, ensuring a seamless user experience across multiple browsers and devices.
            Assisted in optimizing website performance through code refactoring and implementing best practices.
            Conducted thorough testing and debugging to identify and resolve any issues or bugs.
            Participated in team meetings and provided valuable insights and suggestions for improving the website's design and functionality.
            Gained practical experience in version control systems (e.g., Git) and collaborated effectively using platforms such as GitHub.
            Actively contributed to the team's agile development processes, including sprint planning and daily stand-up meetings.
            "
          />
          <Details
            position="Freelance front-end Web Developer"
            company="Self"
            companyLink="/"
            time="June 2023 - Present"
            address="Amritsar, Punjab, India"
            work="Hi, 
            I’m a freelance web developer who can create stunning and user-friendly websites for any industry. 
            
            I have skills in frontend and backend development, using HTML, CSS, JavaScript, NEXTJs, MYSQL, and WordPress. 
            
            I can handle web design, development, maintenance, optimization, and hosting. I can deliver high-quality and responsive web solutions that suit your needs and budget. I love web development and learning new things. I communicate well, deliver on time, and satisfy customers. 
            
            If you need a freelance web developer who can make your web vision a reality, please contact me. I’m excited to work with you on your next web project. 
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
