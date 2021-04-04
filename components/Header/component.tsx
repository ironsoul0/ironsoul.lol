import { Container } from "components";
import { ChevronIcon, MoonIcon, SunIcon } from "lib";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import React, { ChangeEvent, FC, useCallback, useState } from "react";

enum Themes {
  light = "light",
  dark = "dark",
}

enum Languages {
  en = "en",
  ru = "ru",
}

export const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [language, setLanguage] = useState<string>(
    router.locale || Languages.en
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  }, [setTheme, theme]);

  const toggleLanguage = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
      setLanguage(value);
      router.push("/", "/", { locale: value });
    },
    [router]
  );

  return (
    <Container className="flex items-center justify-between pt-9">
      <Link href="/">
        <a className="text-2xl font-bold dark:text-white-900">ironsoul</a>
      </Link>
      <div className="flex items-center">
        <button
          className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
          onClick={toggleTheme}
        >
          {theme === Themes.light ? (
            <MoonIcon className="inline ml-1 text-white-900 text-black-900" />
          ) : (
            <SunIcon className="inline text-white-900" />
          )}
        </button>
        <div className="relative ml-4">
          <select
            value={language}
            className="py-2 pl-3 text-base font-medium rounded appearance-none pr-9 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-none"
            style={{ backgroundColor: "inherit" }}
            onChange={toggleLanguage}
          >
            <option value={Languages.en}>EN</option>
            <option value={Languages.ru}>RU</option>
          </select>
          <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center pointer-events-none">
            <ChevronIcon />
          </span>
        </div>
      </div>
    </Container>
  );
};
