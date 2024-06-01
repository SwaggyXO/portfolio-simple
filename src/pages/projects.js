import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import UnderConstruction from "@/components/UnderConstruction";

const FramerImage = motion(Image);

const Project = ({ title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Devashish Soni | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        {/* <Layout className="pt-16">
          <AnimatedText text="Showcase" className="mb-16 lg:!text-4xl sm:mb-8 sm:!text-3xl xs:!text-3xl" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <Project
                title="ThreeJS Quote Cloud"
                img={QuoteCloud}
                summary="A quote made of 3D Text floating in a cloud of randomly generated geometry."
                link="https://quote-cloud.vercel.app/"
                github="https://github.com/bwilliams91/quote-cloud"
              />
            </div>
            <div className="col-span-12">
              <Project
                title="Reflection Material ThreeJS"
                img={ReflectionMat}
                summary="Experimenting with geometries and materials in threejs"
                link="https://materialexp.netlify.app/"
                github="https://github.com/bwilliams91/material-experimentation"
              />
            </div>
          </div>
        </Layout> */}
        <UnderConstruction></UnderConstruction>
      </main>
    </>
  );
};

export default projects;
