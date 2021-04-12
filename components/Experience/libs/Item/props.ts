import { AnimationControls } from "framer-motion";
import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  place: string;
  date: string;
  custom: number;
  last?: boolean;
  first?: boolean;
  cancelled?: boolean;
  controls?: AnimationControls;
};
