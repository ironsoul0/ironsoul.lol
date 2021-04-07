import { AnimationControls } from "framer-motion";
import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLAnchorElement> & {
  name: string;
  icon: React.ReactElement;
  href: string;
  controls: AnimationControls;
  custom: number;
};
