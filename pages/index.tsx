import { Header, Hero, Projects } from "components";
import { GetStaticProps } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>ironsoul - Temirzhan Yussupov</title>
      </Head>
      <Header />
      <Hero />
      <Projects />
    </div>
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
