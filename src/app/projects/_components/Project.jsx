import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

const FramerImage = motion(Image);

const Project = ({
  type,
  title,
  summary,
  img,
  link = "",
  github = "",
  technologies = []
}) => {
  return (
    <article className="w-full h-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:bg-dark dark:border-light md:p-4 sm:p-3 xs:p-3">
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
          className="w-full h-auto aspect-video object-cover"
          // placeholder="blur"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 xs:mt-3">
        <span className="text-primaryo font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base sm:text-sm xs:text-sm">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl md:text-xl sm:text-lg xs:text-base xs:my-1">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium dark:text-light sm:text-sm xs:text-xs xs:my-1 flex-wrap">
          {summary}
        </p>

        {/* Technology badges */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 my-2 xs:gap-1">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full dark:bg-orange-900 dark:text-orange-200 xs:px-1 xs:py-0.5 xs:text-[10px]"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full dark:bg-gray-800 dark:text-gray-400 xs:px-1 xs:py-0.5 xs:text-[10px]">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="mt-2 flex items-center justify-between w-full xs:mt-3">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light dark:border-light md:text-base sm:text-sm xs:text-sm min-h-[44px] flex items-center"
          >
            Visit Project
          </Link>
          {github && (
            <Link href={github} target="_blank" className="w-8 h-8 md:w-6 md:h-6 xs:w-8 xs:h-8 flex items-center justify-center min-h-[44px] min-w-[44px]">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
