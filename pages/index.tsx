import {
  CitationOverlay,
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "components";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";

const IndexPage = () => {
  const [citation, setCitation] = useState(true);
  const [main, setMain] = useState(false);
  const [playNinja] = useSound("/sounds/ninja.mp3");
  const { t } = useTranslation("common");

  useEffect(() => {
    const ids = [
      setTimeout(() => {
        playNinja();
        setCitation(false);
      }, 4800),
      setTimeout(() => setMain(true), 5700),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [playNinja, setCitation]);

  return (
    <>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>
      <CitationOverlay citation={citation} />
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
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default IndexPage;
