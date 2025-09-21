"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import FeaturedProject from "@/app/projects/_components/FeaturedProject";
import Project from "@/app/projects/_components/Project";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiArrowDropRightFill } from "react-icons/ri";

import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";



const ProjectsClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink1, setSelectedLink1] = useState("");
  const [selectedLink2, setSelectedLink2] = useState("");

  // Add dynamic IDs to projects (latest projects on top)
  const projectsWithIds = projects.map((project, index) => ({
    ...project,
    id: projects.length - index,
  }));

  // Filter projects by service-based categories
  const featuredProjects = projectsWithIds.filter(
    (project) => project.type === "Featured Project"
  );
  const mobileApps = projectsWithIds.filter(
    (project) => project.category === "mobile-apps"
  );
  const webApplications = projectsWithIds.filter(
    (project) => project.category === "web-applications"
  );
  const wordpressSites = projectsWithIds.filter(
    (project) => project.category === "wordpress-sites"
  );
  const customWebsites = projectsWithIds.filter(
    (project) => project.category === "custom-websites"
  );
  const personalProjects = projectsWithIds.filter(
    (project) => project.category === "personal"
  );

  return (
    <main className="w-full flex flex-col items-center justify-center dark:text-light bg-light dark:bg-dark">
      <div className="pt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedText
          text="My Projects"
          className="xs:!text-4xl text-7xl sm:text-6xl lg:text-7xl sm:mb-8 mb-16"
        />
        <AnimatedText
          className="xs:!text-3xl text-5xl sm:text-4xl lg:text-5xl sm:mb-8 mb-16"
          text="Imagination Trumps Knowledge!"
        />

        {/* Category Navigation Links for SEO */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Explore my work by service category:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects/mobile-app-development"
              className="inline-flex items-center px-4 py-2 bg-orange-100 hover:bg-orange-200 dark:bg-orange-900 dark:hover:bg-orange-800 text-orange-800 dark:text-orange-200 rounded-lg transition-colors text-sm font-medium"
            >
              📱 Mobile App Development
            </Link>
            <Link
              href="/projects/web-application-development"
              className="inline-flex items-center px-4 py-2 bg-orange-100 hover:bg-orange-200 dark:bg-orange-900 dark:hover:bg-orange-800 text-orange-800 dark:text-orange-200 rounded-lg transition-colors text-sm font-medium"
            >
              🌐 Web Application Development
            </Link>
            <Link
              href="/projects/wordpress-development"
              className="inline-flex items-center px-4 py-2 bg-orange-100 hover:bg-orange-200 dark:bg-orange-900 dark:hover:bg-orange-800 text-orange-800 dark:text-orange-200 rounded-lg transition-colors text-sm font-medium"
            >
              🔧 WordPress Development
            </Link>
            <Link
              href="/projects/custom-website-development"
              className="inline-flex items-center px-4 py-2 bg-orange-100 hover:bg-orange-200 dark:bg-orange-900 dark:hover:bg-orange-800 text-orange-800 dark:text-orange-200 rounded-lg transition-colors text-sm font-medium"
            >
              💻 Custom Website Development
            </Link>
          </div>
        </div>

        {/* Service-Based Tabs */}
        <Tabs defaultValue="featured" className="relative tabs-container">
          {/* Mobile scroll hint - only show when horizontal scrolling is needed */}
          <div className="xs:block sm:hidden md:hidden text-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span className="inline-flex items-center gap-1">
              👈 Swipe to explore all 6 categories 👉
            </span>
          </div>

          <TabsList className="w-max mx-auto mb-10 bg-orange-500 text-white rounded-lg
                                      md:grid md:grid-cols-6 lg:grid-cols-3
                                      flex flex-nowrap overflow-x-auto scrollbar-hide
                                      sm:flex-wrap sm:justify-center sm:overflow-visible
                                      md:overflow-hidden overflow-hidden  md:flex-nowrap
                                      px-4 py-4 sm:py-3 md:px-2 md:py-2
                                      scroll-smooth snap-x snap-mandatory 
                                      gap-3 sm:gap-2 md:gap-1 max:h-[100px] ">
            <TabsTrigger
              value="featured"
              className="data-[state=active]:bg-amber-900 data-[state=active]:text-white
                          flex-shrink-0 whitespace-nowrap snap-start
                          px-6 py-4 sm:py-3 text-sm font-medium rounded-lg
                          md:px-3 md:py-2 md:text-xs md:rounded-md
                          min-h-[48px] sm:min-h-[44px] min-w-[100px] sm:min-w-[90px]
                          flex items-center justify-center
                          transition-all duration-200 hover:bg-amber-800
                          shadow-sm hover:shadow-md active:scale-95"
            >
              ⭐ Featured
            </TabsTrigger>
            <TabsTrigger
              value="mobile-apps"
              className="data-[state=active]:bg-amber-900 data-[state=active]:text-white
                          flex-shrink-0 whitespace-nowrap snap-start
                          px-6 py-4 sm:py-3 text-sm font-medium rounded-lg
                          md:px-3 md:py-2 md:text-xs md:rounded-md
                          min-h-[48px] sm:min-h-[44px] min-w-[100px] sm:min-w-[90px]
                          flex items-center justify-center
                          transition-all duration-200 hover:bg-amber-800
                          shadow-sm hover:shadow-md active:scale-95"
            >
              📱 Mobile
            </TabsTrigger>
            <TabsTrigger
              value="web-apps"
              className="data-[state=active]:bg-amber-900 data-[state=active]:text-white
                          flex-shrink-0 whitespace-nowrap snap-start
                          px-6 py-4 sm:py-3 text-sm font-medium rounded-lg
                          md:px-3 md:py-2 md:text-xs md:rounded-md
                          min-h-[48px] sm:min-h-[44px] min-w-[100px] sm:min-w-[90px]
                          flex items-center justify-center
                          transition-all duration-200 hover:bg-amber-800
                          shadow-sm hover:shadow-md active:scale-95"
            >
              🌐 Web Apps
            </TabsTrigger>
            <TabsTrigger
              value="wordpress"
              className="data-[state=active]:bg-amber-900 data-[state=active]:text-white
                          flex-shrink-0 whitespace-nowrap snap-start
                          px-6 py-4 sm:py-3 text-sm font-medium rounded-lg
                          md:px-3 md:py-2 md:text-xs md:rounded-md
                          min-h-[48px] sm:min-h-[44px] min-w-[100px] sm:min-w-[90px]
                          flex items-center justify-center
                          transition-all duration-200 hover:bg-amber-800
                          shadow-sm hover:shadow-md active:scale-95"
            >
              🔧 WordPress
            </TabsTrigger>
            <TabsTrigger
              value="custom"
              className="data-[state=active]:bg-amber-900 data-[state=active]:text-white
                          flex-shrink-0 whitespace-nowrap snap-start
                          px-6 py-4 sm:py-3 text-sm font-medium rounded-lg
                          md:px-3 md:py-2 md:text-xs md:rounded-md
                          min-h-[48px] sm:min-h-[44px] min-w-[100px] sm:min-w-[90px]
                          flex items-center justify-center
                          transition-all duration-200 hover:bg-amber-800
                          shadow-sm hover:shadow-md active:scale-95"
            >
              💻 Custom
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-amber-900 data-[state=active]:text-white
                          flex-shrink-0 whitespace-nowrap snap-start
                          px-6 py-4 sm:py-3 text-sm font-medium rounded-lg
                          md:px-3 md:py-2 md:text-xs md:rounded-md
                          min-h-[48px] sm:min-h-[44px] min-w-[100px] sm:min-w-[90px]
                          flex items-center justify-center
                          transition-all duration-200 hover:bg-amber-800
                          shadow-sm hover:shadow-md active:scale-95"
            >
              🎯 Personal
            </TabsTrigger>
          </TabsList>

          {/* Featured Projects Tab */}
          <TabsContent value="featured">
            <div className="grid grid-cols-12 gap-6 sm:gap-4 xs:gap-3">
              {featuredProjects.map((project) => (
                <div key={project.id} className="col-span-12 mb-8 xs:mb-6">
                  <FeaturedProject {...project} />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Mobile Apps Tab */}
          <TabsContent value="mobile-apps">
            <div className="grid grid-cols-12 gap-6 sm:gap-4 xs:gap-3">
              {mobileApps.map((project) => (
                <div
                  key={project.id}
                  className={`
                      ${project.type === "Featured Project"
                      ? "col-span-12"
                      : "col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12 xs:col-span-12"
                    } mb-8 xs:mb-6
                    `}
                >
                  {project.type === "Featured Project" ? (
                    <FeaturedProject {...project} />
                  ) : (
                    <Project {...project} />
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Web Applications Tab */}
          <TabsContent value="web-apps">
            <div className="grid grid-cols-12 gap-6 sm:gap-4 xs:gap-3">
              {webApplications.map((project) => (
                <div
                  key={project.id}
                  className={`
                      ${project.type === "Featured Project"
                      ? "col-span-12"
                      : "col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12 xs:col-span-12"
                    } mb-8 xs:mb-6
                    `}
                >
                  {project.type === "Featured Project" ? (
                    <FeaturedProject {...project} />
                  ) : (
                    <Project {...project} />
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* WordPress Sites Tab */}
          <TabsContent value="wordpress">
            <div className="grid grid-cols-12 gap-6 sm:gap-4 xs:gap-3">
              {wordpressSites.map((project) => (
                <div
                  key={project.id}
                  className={`
                      ${project.type === "Featured Project"
                      ? "col-span-12"
                      : "col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12 xs:col-span-12"
                    } mb-8 xs:mb-6
                    `}
                >
                  {project.type === "Featured Project" ? (
                    <FeaturedProject {...project} />
                  ) : (
                    <Project {...project} />
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Custom Websites Tab */}
          <TabsContent value="custom">
            <div className="grid grid-cols-12 gap-6 sm:gap-4 xs:gap-3">
              {customWebsites.map((project) => (
                <div
                  key={project.id}
                  className={`
                      ${project.type === "Featured Project"
                      ? "col-span-12"
                      : "col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12 xs:col-span-12"
                    } mb-8 xs:mb-6
                    `}
                >
                  {project.type === "Featured Project" ? (
                    <FeaturedProject {...project} />
                  ) : (
                    <Project {...project} />
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Personal Projects Tab */}
          <TabsContent value="personal">
            <div className="grid grid-cols-12 gap-6 sm:gap-4 xs:gap-3">
              {personalProjects.map((project) => (
                <div
                  key={project.id}
                  className={`
                      ${project.type === "Featured Project"
                      ? "col-span-12"
                      : "col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12 xs:col-span-12"
                    } mb-8 xs:mb-6
                    `}
                >
                  {project.type === "Featured Project" ? (
                    <FeaturedProject {...project} />
                  ) : (
                    <Project {...project} />
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal for Dual Links */}
      {isModalOpen && (
        <div className="fixed z-50 backdrop-blur-3xl inset-0 w-full h-full bg-black/50 text-black flex items-center justify-center p-4">
          <div className="flex flex-col relative rounded-lg shadow-xl p-10 py-20 bg-slate-50 z-50 items-start font-medium transition-all translate-x-0 max-w-sm w-full xs:p-6 xs:py-12">
            <p className="text-2xl font-bold mb-10 xs:text-xl xs:mb-6">Choose a link:</p>
            <Link
              target="_blank"
              href={selectedLink1}
              className="hover:scale-[105%] flex gap-1 items-center transition-transform mb-4 text-lg xs:text-base min-h-[44px] w-full"
              onClick={() => setIsModalOpen(false)}
            >
              <RiArrowDropRightFill />
              Admin Dashboard
            </Link>
            <Link
              target="_blank"
              href={selectedLink2}
              className="hover:scale-[105%] flex gap-1 items-center transition-transform text-lg xs:text-base min-h-[44px] w-full"
              onClick={() => setIsModalOpen(false)}
            >
              <RiArrowDropRightFill />
              Store Frontend
            </Link>

            <button
              className="absolute top-2 h-8 w-8 text-black/80 right-2 font-extrabold flex items-center justify-center min-h-[44px] min-w-[44px] xs:top-1 xs:right-1"
              onClick={() => setIsModalOpen(false)}
            >
              <IoCloseCircleOutline height="24px" width="24px" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectsClient;
