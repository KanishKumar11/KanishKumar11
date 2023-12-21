import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Kanish Kumar | Projects Page</title>
        <meta
          name="description"
          content="Kanish Kumar - I'm freelance web developer"
        />
      </Head>
      <main className="w-full bg-light dark:bg-dark flex flex-col items-center justify-center min-h-screen">
        <Layout className="pt-16">
          <AnimatedText
            text="Currently cooking this page!"
            className="mb-16 text-6xl"
          />
        </Layout>
      </main>
    </>
  );
};

export default page;
