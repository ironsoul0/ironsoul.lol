import { motion, useAnimation } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { SectionHeader } from "./libs/SectionHeader";
import { Props } from "./props";

export const Section: FC<Props> = ({
  title,
  description,
  className,
  children,
}: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          y: 30,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        damping: 5,
        mass: 1,
      }}
    >
      <SectionHeader title={title} description={description} />
      {children}
    </motion.div>
  );
};
