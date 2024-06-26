import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import profilePic from "../../public/images/profile/full_edit.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Devashish Soni | About</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Innovation Through Exploration!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-6 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Hey! My name is Devashish, I am a full-stack engineer, with a focus on backend engineering. 
                I have a passion for robust, user-friendly digital products that solve real-world problems. 
                I have experience working with a variety of technologies, including React, Node.js, Express, MongoDB, and more.
              </p>
              <p className="my-4 font-medium">
                I believe in having a wide perspective and digging deep into given problems to find the best suitable solution.
                I am a quick learner and a team player who loves to work with people passionate about what they do, irrespective of their domain.
              </p>
              <p className="font-medium">
                I am always looking to learn new things and improve my skills, and I am excited to bring my expertise, 
                equipped with exceptional communication and collaboration skills to your next project/organisation.
              </p>
              <p className="my-4 font-medium">
                Apart from development, I love to explore the intricacies of system design, problem solving via LeetCode, CodeChef and Codeforces.
                In my leisure time, I jam to music and keep my guitar skills sharp. I also enjoy playing video games which I fit in my schedule whenever I can.
              </p>
              <p className="font-medium">
                I try to maintain a healthy work-life balance by working out on a regular basis, even if its just a 30-minute walk.
                Not only that, I make sure to spend time with my family and friends, as they are the ones who help me stay grounded.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Devashish"
                className="w-full h-auto rounded-2xl"
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
          <Skills />

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
