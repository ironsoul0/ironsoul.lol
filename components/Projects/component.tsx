import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "Laddy",
        subtitle: t("projects.laddy.subtitle"),
        description: t("projects.laddy.description"),
        technologies: ["React", "TypeScript", "GraphQL"],
        externalLink: "https://laddy.app",
        githubLink: "https://github.com/ironsoul0/laddy",
        imageLink: `/images/laddy.png`,
      },
      {
        title: "NU Open",
        subtitle: t("projects.nuopen.subtitle"),
        description: t("projects.nuopen.description"),
        technologies: ["React", "Gatsby", "Node.js"],
        externalLink: "https://nuopen.kz",
        githubLink: "https://github.com/ironsoul0/nuopen",
        imageLink: `/images/nuopen.png`,
      },
      {
        title: "Railwayz",
        subtitle: t("projects.railwayz.subtitle"),
        description: t("projects.railwayz.description"),
        technologies: ["React", "XGBoost", "Django"],
        externalLink: "https://railwayz.ironsoul.me",
        githubLink: "https://github.com/ironsoul0/samruk-hackathon",
        imageLink: `/images/railwayz.png`,
      },
    ],
    [t]
  );

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
