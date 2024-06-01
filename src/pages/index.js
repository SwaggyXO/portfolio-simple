import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/customised_pfp_1.png";
import AnimatedText from "../components/AnimatedText.js";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devashish Soni | Home</title>
        <meta name="description" content="Devashish Soni Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <layout className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image src={profilePic} alt="Devashish" fetchpriority="high" width="580" height="580" decoding="async" data-nimg="1" class="h-auto w-full" sizes="100vw" />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Coding with Curiosity, Building with Passion"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl sm:pt-2"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Enthusiastic Software Developer with a passion for cutting-edge technologies and continuous growth. I excel in dynamic environments and thrive as a fast learner.
                Currently mastering full stack development, all the while venturing in various domains such as AI and Game Development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume/Devashish_Soni_Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 
                  border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:devashish.soni05@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </layout>
      </main>
    </>
  );
}
