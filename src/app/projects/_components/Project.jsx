import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

const FramerImage = motion(Image);

const Project = ({ type, title, summary, img, link = "", github = "" }) => {
  return (
    <article className="w-full  h-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:bg-dark dark:border-light xs:p-4 max-w-[50vw] md:max-w-[80vw]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] md:h-[102%] xs:rounded-[1.5rem] " />
      <div className="absolute top-10 right-0 -z-20 w-[95%] h-[80%] rounded-[2.5rem] bg-orange-500 rounded-br-3xl dark:bg-orange-500 xs:-right-2 sm:h-[102%] backdrop:blur-3xl blur-3xl xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={500}
          height={500}
          className="w-full h-auto"
          // placeholder="blur"
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

export default Project;
