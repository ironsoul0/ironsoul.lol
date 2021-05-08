import { motion } from "framer-motion";
import React, { FC } from "react";

import { Props } from "./props";

export const HeroLink: FC<Props> = ({ title, href }: Props) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className="relative text-blue-700"
      whileHover="visible"
      initial="hidden"
    >
      @{title}
      <motion.span
        className="absolute bottom-0 left-0 w-full bg-blue-700 h-0.5"
        variants={{
          hidden: {
            opacity: 0,
            y: -5,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          damping: 2,
          mass: 3,
        }}
      />
    </motion.a>
  );
};
