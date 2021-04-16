import clsx from "clsx";
import { Container, Logo } from "components";
import { motion } from "framer-motion";
import { useOnClickOutside } from "lib";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import useSound from "use-sound";

import { useHeaderVisible } from "./libs/useHeaderVisible";

enum Themes {
  light = "light",
  dark = "dark",
}

enum Languages {
  en = "en",
  ru = "ru",
}

const languages = [
  {
    id: Languages.ru,
    name: "RU",
    flag: "🇷🇺",
  },
  {
    id: Languages.en,
    name: "EN",
    flag: "🇺🇸",
  },
];

export const Header: FC = () => {
  const [playOnDark] = useSound("/sounds/dark-on.mp3");
  const [playOnLight] = useSound("/sounds/light-on.mp3");
  const visible = useHeaderVisible();
  const ref = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [langPicker, setLangPicker] = useState(false);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [language, setLanguage] = useState<string>(
    router.locale || Languages.en
  );

  const toggleTheme = useCallback(() => {
    if (theme === Themes.light) {
      playOnLight();
    } else {
      playOnDark();
    }

    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  }, [setTheme, theme, playOnDark, playOnLight]);

  const toggleLangPicker = useCallback(() => {
    setLangPicker((prev) => !prev);
  }, []);

  const turnOffLangPicker = useCallback(() => {
    setLangPicker(false);
  }, []);

  useOnClickOutside(ref, turnOffLangPicker);

  const toggleLanguage = useCallback(
    (language: Languages) => {
      return () => {
        turnOffLangPicker();
        setLanguage(language);
        router.push("/", "/", { locale: language });
      };
    },
    [router, turnOffLangPicker]
  );

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={clsx(
        "fixed z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300 focus:dark:bg-darkTheme",
        visible ? "top-0" : "-top-28"
      )}
    >
      <Container className="flex items-center justify-between w-auto py-5 md:py-9 text-black-900 dark:text-white-900">
        <Link href="/">
          <a href="/">
            <Logo className="w-24 fill-current md:w-28 dark:text-white-900 text-black-900" />
          </a>
        </Link>
        <div className="flex items-center">
          <button
            className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
            onClick={toggleTheme}
          >
            {mounted ? (
              theme === Themes.light ? (
                <HiMoon className="inline w-6 h-6 ml-1" />
              ) : (
                <HiSun className="inline w-6 h-6" />
              )
            ) : null}
          </button>
          <div className="relative ml-2 md:ml-4" ref={ref}>
            <button
              className="py-2 pl-4 text-base font-medium uppercase rounded appearance-none pr-9 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-none"
              onClick={toggleLangPicker}
            >
              {language}
            </button>
            <motion.div
              className="absolute w-full p-1 mt-4 bg-pink dark:bg-white-900 rounded-md text-black-900 transition-all"
              initial="hidden"
              animate={langPicker ? "visible" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -2,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((currentLanguage, i) => (
                <>
                  <button
                    className="block w-full px-2 py-1 text-left hover:bg-white-700 rounded-md transition-colors focus:outline-none"
                    key={currentLanguage.id}
                    onClick={toggleLanguage(currentLanguage.id)}
                  >
                    <p className={clsx("inline")}>{currentLanguage.name} </p>
                    <span role="img" aria-label="flag">
                      {currentLanguage.flag}
                    </span>
                  </button>
                  {i !== languages.length - 1 && (
                    <div className="my-1 bg-white-700 h-0.5" />
                  )}
                </>
              ))}
            </motion.div>
            <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center pointer-events-none">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
