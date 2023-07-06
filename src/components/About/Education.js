import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[60%] mx-auto md:w-[80%] flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="captalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:!text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[38px] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[36px] xs:!left-[20px]"
        />
        <ul className="w-full flex-col flex items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of Computer Applications"
            time="2023-2026"
            place="Hindu College Amritsar (under Guru Nanak Dev University) "
            info="General UG Computer Applications Course."
          />
          <Details
            type="High School"
            time="2007-2023"
            place="Bhartiya Vidhya Bhavan's Sohan Lal Public School, Amritsar"
            info="General School Education till class 12"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
