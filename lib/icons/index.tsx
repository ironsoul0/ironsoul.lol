import clsx from "clsx";
import React, { FC } from "react";

import { Props } from "./props";

export const MoonIcon: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("w-6 h-6", className)}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.347 12.708A9 9 0 016.64 1a9.003 9.003 0 003.354 17.354 9.003 9.003 0 008.354-5.646z"
      ></path>
    </svg>
  );
};

export const SunIcon: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("w-6 h-6", className)}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ChevronIcon: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
      className={clsx("w-4 h-4", className)}
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  );
};
