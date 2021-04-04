import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

enum Theme {
  dark = "dark",
  light = "light",
}

const IndexPage = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === Theme.dark ? Theme.light : Theme.dark;
    setTheme(nextTheme);
  }, [theme, setTheme]);

  return (
    <div className="max-w-md py-4 mx-auto text-center">
      <button
        className="px-4 py-3 mb-3 text-white bg-blue-800 focus:outline-none focus:ring-2 ring-offset-1"
        onClick={toggleTheme}
      >
        Toggle dark mode
      </button>
      <h1 className="font-bold">Hello Next.js</h1>
      <p className="text-5xl">Most opinionated Next.js setup</p>
      <p>{t("title")}</p>
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
