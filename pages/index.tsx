import {
  Contact,
  Container,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "components";
import { motion, useAnimation } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";

const textVariants = {
  initial: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const IndexPage = () => {
  const controls = useAnimation();
  const [citation, setCitation] = useState(true);
  const [main, setMain] = useState(false);

  useEffect(() => {
    const firstID = setTimeout(() => {
      setCitation(false);
    }, 4200);

    const secondID = setTimeout(() => {
      setMain(true);
    }, 5000);

    return () => {
      clearTimeout(firstID);
      clearTimeout(secondID);
    };
  }, [setCitation, controls]);

  return (
    <>
      <Head>
        <title>Home | Temirzhan Yussupov</title>
      </Head>
      <motion.div
        className="absolute flex items-center justify-center w-full h-full"
        variants={{
          initial: {
            opacity: 1,
          },
          invisible: {
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.6,
        }}
        initial="initial"
        animate={citation ? "initial" : "invisible"}
      >
        <Container>
          <motion.p
            className="text-xl font-medium md:text-2xl dark:text-white-900 text-black-900"
            variants={textVariants}
            initial="initial"
            animate="visible"
            transition={{
              delay: 1.0,
              damping: 10,
              mass: 10,
              duration: 1.2,
            }}
          >
            Ninjas are not born, they are made
          </motion.p>
          <motion.p
            className="text-base md:text-right dark:text-white-700 text-black-700"
            initial="initial"
            animate="visible"
            variants={textVariants}
            transition={{
              delay: 2.0,
              damping: 10,
              mass: 10,
              duration: 1.2,
            }}
          >
            Unknown master
          </motion.p>
        </Container>
      </motion.div>
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            display: "none",
          },
          visible: {
            opacity: 1,
            display: "block",
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          duration: 1.0,
        }}
      >
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "hero",
        "bottom",
      ])),
    },
  };
};

export default IndexPage;
