import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full sm:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Full Stack Developer Intern"
            company="Xansr Media"
            companyLink="/"
            time="Dec 2023 - Feb 2024"
            address="Remote"
            work="
              Worked on a Sports OTT platform's backend as the Team Lead. Developed REST APIs using NodeJS, ExpressJS and TypeScript.
              Setup and built an API Gateway using API Management from Azure.
              Utilized MySQL as the database and Docker for containerizing the backend.
              Documented the API endpoints following Swagger specification and made wikis for fluent internal communication.
            "
          />
          <Details
            position="Software Engineer Intern"
            company="Volkswagen Group Technology Solutions"
            companyLink="/"
            time="Dec 2022 - Sep 2023"
            address="Gurugram, Haryana, IN"
            work="
              Developed a web app using ReactJS, NodeJS, and Express showcasing AR capabilities. Learnt a little about AWS and Hosted the app on AWS
              App Runner which was run by 140+ internal employees in Pune & Gurugram.
              Designed UI/UX for myAudi Connect using Figma in a team of 3, incorporating new requirements within 2 weeks.
              Engineered an AR Indoor Navigation app for Hololens 2 using Unity & C# and Azure CosmosDB for MongoDB
              as the database.
              Collaborated with a startup, working in a team of 5 to develop and maintain a Hololens 2 application.
              Created a minimalistic model for vehicle detection using DetectronV2 with an 87% accuracy score.
              Researched about LLMs, LangChains and other Deep learning concepts and models for enhancing my knowledge. 
            "
          />
          <Details
            position="Full Stack Developer Trainee"
            company="Assert IT Solutions LLP"
            companyLink="/"
            time="August 2022 - Sep 2022"
            address="Remote"
            work="
              Worked as a trainee under the direct supervision of the director.
              Documented the essential functions for helping in reverse-engineering a Spring
              application into a MERN stack application.
              Fixed responsiveness issues and design of a frontend written in ReactJS.
              Created a dashboard for a client using ReactJS and helped fix some of the
              backend logic in NodeJS.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
