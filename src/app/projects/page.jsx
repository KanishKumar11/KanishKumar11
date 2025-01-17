"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import FeaturedProject from "@/app/projects/_components/FeaturedProject";
import Project from "@/app/projects/_components/Project";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiArrowDropRightFill } from "react-icons/ri";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink1, setSelectedLink1] = useState("");
  const [selectedLink2, setSelectedLink2] = useState("");

  // Add dynamic IDs to projects (latest projects on top)
  const projectsWithIds = projects.map((project, index) => ({
    ...project,
    id: projects.length - index, // Assign IDs in reverse order
  }));

  // Filter projects by category
  const personalProjects = projectsWithIds.filter(
    (project) => project.category === "personal"
  );
  const clientProjects = projectsWithIds.filter(
    (project) => project.category === "client"
  );

  return (
    <>
      <Head>
        <title>Kanish Kumar | Projects Page</title>
        <meta
          name="description"
          content="Projects | Kanish Kumar - I'm a freelance web developer"
        />
      </Head>
      <main className="w-full flex flex-col items-center justify-center dark:text-light bg-light dark:bg-dark">
        <Layout className="pt-16 sm:!px-4">
          <AnimatedText
            text="My Projects"
            className="xs:!text-4xl text-7xl sm:text-6xl lg:text-7xl sm:mb-8 mb-16"
          />
          <AnimatedText
            className="xs:!text-3xl text-5xl sm:text-4xl lg:text-5xl sm:mb-8 mb-16"
            text="Imagination Trumps Knowledge!"
          />

          {/* ShadCN Tabs */}
          <Tabs defaultValue="all" className="w-full ">
            <TabsList className="grid w-full grid-cols-3 mb-10 bg-orange-500 text-white ">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-amber-900 data-[state=active]:text-white"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-amber-900 data-[state=active]:text-white"
              >
                Personal Projects
              </TabsTrigger>
              <TabsTrigger
                value="client"
                className="data-[state=active]:bg-amber-900 data-[state=active]:text-white"
              >
                Client Projects
              </TabsTrigger>
            </TabsList>

            {/* All Projects Tab */}
            <TabsContent value="all">
              <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                {projectsWithIds.map((project) => (
                  <div
                    key={project.id}
                    className={`${
                      project.type == "Featured Project"
                        ? "col-span-12"
                        : "col-span-6"
                    }`}
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
              <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                {personalProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`${
                      project.type == "Featured Project"
                        ? "col-span-12"
                        : "col-span-6"
                    }`}
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

            {/* Client Projects Tab */}
            <TabsContent value="client">
              <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                {clientProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`${
                      project.type == "Featured Project"
                        ? "col-span-12"
                        : "col-span-6"
                    }`}
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
        </Layout>

        {/* Modal for Dual Links */}
        {isModalOpen && (
          <div className="fixed z-50 backdrop-blur-3xl inset-0 w-full h-full bg-black/50 text-black flex items-center justify-center">
            <div className="flex flex-col relative rounded-lg shadow-xl p-10 py-20 bg-slate-50 z-50 items-start font-medium transition-all translate-x-0">
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
      </main>
    </>
  );
};

export default Projects;
