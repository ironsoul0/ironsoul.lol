import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle: string;
  description: string;
  technologies: readonly string[];
  githubLink: string;
  externalLink: string;
  imageLink: string;
  rightShift?: boolean;
};
