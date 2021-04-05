import { Container } from "components";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { HandWave } from "./libs/HandWave";

export const Hero: FC = () => {
  return (
    <Container>
      <img
        src="/images/me.png"
        alt="Timka"
        className="border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-36"
      />
      <div className="flex items-center">
        <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl">
          Hi, I'm Timka!
        </h1>
        <HandWave className="text-4xl md:text-5xl" />
      </div>
      <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
        Full-stack coder, magician and flexer
        <br />
        Currently working full-time at{" "}
        <motion.a
          href="https://alabs.team"
          target="_blank"
          className="relative text-blue-700"
          whileHover="visible"
          initial="hidden"
        >
          @alabs.team
          <motion.span
            className="absolute bottom-0 left-0 w-full bg-blue-700 h-0.5"
            variants={{
              hidden: {
                opacity: 0,
                y: -5,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          />
        </motion.a>
        <br />
        Upcoming SWE Intern at{" "}
        <motion.a
          href="https://citadel.com"
          target="_blank"
          className="relative text-blue-700"
          whileHover="visible"
          initial="hidden"
        >
          @Citadel
          <motion.span
            className="absolute bottom-0 left-0 w-full bg-blue-700 h-0.5"
            variants={{
              hidden: {
                opacity: 0,
                y: -5,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          />
        </motion.a>
      </p>
    </Container>
  );
};
