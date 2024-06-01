import React from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";
import UnderConstruction from "./UnderConstruction";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-60 w-full text-center mb-8 pb-4 lg:pb-2 md:text-6xl md:mt-32">
        Skills
      </h2>
      {/* <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
       lg:h-[80vh] sm:h-[60vh] xs:h-[40vh] 
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg
       Md:bg-circularLightMd Md:dark:bg-circularDarkMd
       sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Full-Stack
        </motion.div>

        <Skill name="JS & TS" x="-18vw" y="2vw" />
        <Skill name="HTML & CSS" x="-1vw" y="-10vw" />
        <Skill name="ReactJS" x="19vw" y="6vw" />
        <Skill name="NodeJS" x="0vw" y="10vw" />
        <Skill name="Spring Boot" x="-21vw" y="-15vw" />
        <Skill name="C++" x="19vw" y="-12vw" />
        <Skill name="Docker" x="31vw" y="-5vw" />
        <Skill name="Azure" x="19vw" y="-20vw" />
        <Skill name="Figma" x="0vw" y="-28vw" />
        <Skill name="Python" x="-24vw" y="18vw" />
        <Skill name="SQL" x="17vw" y="17vw" />
      </div> */}
      <div className="w-fit h-auto mx-auto my-auto">
        <UnderConstruction></UnderConstruction>
      </div>
    </>
  );
};

export default Skills;
