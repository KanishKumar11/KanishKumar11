import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link = "",
  github = "",
  appStoreLink = "",
  linkAdmin = "",
  linkStore = "",
  githubAdmin = "",
  githubStore = "",
  technologies = [],
  isLiveApp = false
}) => {
  return (
    <article className="w-full flex relative items-center justify-between rounded-3xl p-12 border rounded-br-2xl border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 md:p-6 sm:p-4 xs:rounded-2xl xs:rounded-br-3xl xs:p-3 xs:flex-col">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <div className="absolute top-10 right-0 -z-20 w-[95%] h-[80%] rounded-[2.5rem] bg-orange-500 rounded-br-3xl dark:bg-orange-500 xs:-right-2 sm:h-[102%] backdrop:blur-3xl blur-3xl xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full xs:w-full xs:mb-4"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto aspect-video object-cover"
          // placeholder="blur"
          width={1500}
          height={1500}
          loading="lazy"
          sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 xs:w-full xs:pl-0 xs:pt-0">
        <span className="text-primaryo font-medium text-xl dark:text-primaryDark xs:text-base sm:text-lg">
          {type}
        </span>
        <Link
          href={link || ""}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium dark:text-light lg:text-base md:text-sm sm:text-sm xs:text-sm flex-wrap">
          {summary}
        </p>

        {/* Technology badges */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 my-3 xs:gap-1">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full dark:bg-orange-900 dark:text-orange-200 xs:px-2 xs:py-1 xs:text-[10px] sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2 flex items-center flex-wrap gap-2 xs:gap-1 xs:mt-3">
          {/* GitHub Links */}
          {github && (
            <Link href={github} target="_blank" className="w-10 h-10 flex items-center justify-center min-h-[44px] min-w-[44px] xs:w-8 xs:h-8 xs:min-h-[40px] xs:min-w-[40px]">
              <GithubIcon />
            </Link>
          )}
          {githubAdmin && (
            <Link href={githubAdmin} target="_blank" className="w-10 h-10 flex items-center justify-center min-h-[44px] min-w-[44px] xs:w-8 xs:h-8 xs:min-h-[40px] xs:min-w-[40px]">
              <GithubIcon />
            </Link>
          )}

          {/* Main Project Link */}
          {link && (
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base xs:ml-2 xs:px-3 xs:py-2 xs:text-sm min-h-[44px] flex items-center"
            >
              Visit Project
            </Link>
          )}

          {/* App Store Link */}
          {appStoreLink && (
            <Link
              href={appStoreLink}
              target="_blank"
              className="ml-2 rounded-lg bg-blue-600 text-white p-2 px-6 text-lg font-semibold hover:bg-blue-700 sm:px-4 sm:text-base xs:ml-1 xs:px-3 xs:py-2 xs:text-sm min-h-[44px] flex items-center"
            >
              <span className="xs:hidden">{isLiveApp ? "📱 Live on App Store" : "App Store"}</span>
              <span className="hidden xs:inline">📱 App Store</span>
            </Link>
          )}

          {/* Dual Links for E-commerce */}
          {linkAdmin && linkStore && (
            <>
              <Link
                href={linkAdmin}
                target="_blank"
                className="ml-2 rounded-lg bg-purple-600 text-white p-2 px-4 text-sm font-semibold hover:bg-purple-700 xs:ml-1 xs:px-2 xs:py-2 xs:text-xs min-h-[44px] flex items-center"
              >
                <span className="xs:hidden">Admin Dashboard</span>
                <span className="hidden xs:inline">Admin</span>
              </Link>
              <Link
                href={linkStore}
                target="_blank"
                className="ml-2 rounded-lg bg-green-600 text-white p-2 px-4 text-sm font-semibold hover:bg-green-700 xs:ml-1 xs:px-2 xs:py-2 xs:text-xs min-h-[44px] flex items-center"
              >
                <span className="xs:hidden">Store Frontend</span>
                <span className="hidden xs:inline">Store</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
