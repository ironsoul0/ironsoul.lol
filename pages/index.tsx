import { Header, Hero, Projects } from "components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
