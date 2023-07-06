import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
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
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Currently cooking this page!" className="mb-16" />
        </Layout>
      </main>
    </>
  );
};

export default page;
