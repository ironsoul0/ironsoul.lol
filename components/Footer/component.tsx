import { Container } from "components";
import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <Container>
      <p className="py-8 text-sm font-light text-center dark:text-white-700 text-black-700">
        <a
          href="https://github.com/ironsoul0/ironsoul.ninja"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
          rel="noreferrer"
        >
          Designed & Crafted by Timka © 2022
        </a>
      </p>
    </Container>
  );
};
