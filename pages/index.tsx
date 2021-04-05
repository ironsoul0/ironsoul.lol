import { Header, Hero } from "components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Hero />
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
