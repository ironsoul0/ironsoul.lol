import { Section } from "components";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const projects = useMemo(
    () => [
      {
        title: "Laddy",
        subtitle: "Get better by solving problems",
        description:
          "Beautiful recreation of a retired website used by thousands of people in the past. Built using most modern web technologies.",
        technologies: ["React", "TypeScript", "GraphQL"],
        externalLink: "https://laddy.app",
        githubLink: "https://github.com/ironsoul0/laddy",
        imageLink: `/images/laddy.png`,
      },
      {
        title: "NU Open",
        subtitle: "Freshest ICPC competition",
        description:
          "Landing page for the biggest ICPC competition held in the walls of Nazarbayev University. More than 800 people registered through the website.",
        technologies: ["React", "Gatsby", "Node.js"],
        externalLink: "https://nuopen.kz",
        githubLink: "https://github.com/ironsoul0/nuopen",
        imageLink: `/images/nuopen.png`,
      },
      {
        title: "NU Open",
        subtitle: "Freshest ICPC competition",
        description:
          "Landing page for the biggest ICPC competition held in the walls of Nazarbayev University. More than 800 people registered through the website.",
        technologies: ["React", "Gatsby", "Node.js"],
        externalLink: "https://nuopen.kz",
        githubLink: "https://github.com/ironsoul0/nuopen",
        imageLink: `/images/railwayz.png`,
      },
    ],
    []
  );

  return (
    <Section
      className="md:mt-20 mt-14"
      title="Projects"
      description="Here are some of my most favorite projects that I enjoyed coding and designing from scratch."
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
