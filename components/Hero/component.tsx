import { Container, MediaIcon } from "components";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

import { HandWave } from "./libs/HandWave";

export const Hero: FC = () => {
  return (
    <Container>
      <motion.img
        src="/images/me.png"
        alt="me"
        className="border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-36"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{
          damping: 5,
          mass: 1,
          delay: 0.2,
        }}
        initial="hidden"
        animate="visible"
      />
      <div className="flex items-center">
        <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl">
          Hi, I'm Timka!
        </h1>
        <HandWave className="text-4xl md:text-5xl" />
      </div>
      <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
        Full-stack coder, magician and hustler
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
            transition={{
              damping: 2,
              mass: 3,
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
            transition={{
              damping: 2,
              mass: 3,
            }}
          />
        </motion.a>
      </p>
      <div className="flex mt-8">
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/ironsoul0"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaTelegram className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://t.me/ironsoul0"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://twitter.com/ironsoul0"
        />
      </div>
      <div className="mt-10">
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          I am a rising junior at Nazarbayev University majoring in CS.
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          I enjoy creating beautiful UIs with a complex logic behind it.
          <br />
          My technology stack includes React, TypeScript and GraphQL.
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          I am also currently learning more about Golang and microservices.
        </p>
      </div>
    </Container>
  );
};
