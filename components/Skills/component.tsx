import { Container, Section } from "components";
import React, { FC } from "react";
import { FaReact } from "react-icons/fa";
import { SiGraphql, SiNodeDotJs } from "react-icons/si";

import { EthereumIcon, GoIcon, TsIcon } from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "TypeScript",
    href: "https://typescriptlang.org",
    icon: <TsIcon />,
  },
  {
    name: "React",
    href: "https://reactjs.org",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Golang",
    href: "https://golang.org",
    icon: <GoIcon />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: <SiNodeDotJs color="#539E43" />,
  },
  {
    name: "Ethereum",
    href: "https://ethereum.org",
    icon: <EthereumIcon />,
  },
  {
    name: "GraphQL",
    href: "https://graphql.org",
    icon: <SiGraphql color="#E535AB" />,
  },
];

export const Skills: FC = () => {
  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title="Skills"
      description="I am passionate about different technologies. These ones are the things I am most familiar with and build things every day."
    >
      <Container>
        <div className="max-w-md mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
};