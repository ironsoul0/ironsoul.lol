import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useWindowSize } from "lib";
import React, { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Item } from "./libs/Item";

const experience = [
  {
    title: "React Native Participant",
    place: "nFactorial Incubator",
    date: "Jun 2018 - Aug 2020",
  },
  {
    title: "React Native Participant",
    place: "nFactorial Incubator",
    date: "Jun 2018 - Aug 2020",
  },
  {
    title: "React Native Participant",
    place: "nFactorial Incubator",
    date: "Jun 2018 - Aug 2020",
  },
  {
    title: "React Native Participant",
    place: "nFactorial Incubator",
    date: "Jun 2018 - Aug 2020",
  },
  {
    title: "React Native Participant",
    place: "nFactorial Incubator",
    date: "Jun 2018 - Aug 2020",
  },
  {
    title: "React Native Participant",
    place: "nFactorial Incubator",
    date: "Jun 2018 - Aug 2020",
  },
];

export const Experience: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { width: windowWidth } = useWindowSize();
  const [mdScreen, setMdScreen] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  useEffect(() => {
    if (!windowWidth) return;
    setMdScreen(windowWidth >= 768);
  }, [windowWidth]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title="Experience"
      description="Here are some great places I had honor to work on. I enjoy travelling around the world and looking for new opportunities."
    >
      <Container className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          {mdScreen ? (
            <>
              <div>
                {experience.slice(0, 3).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 2}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {experience.slice(3).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 2}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
            </>
          ) : (
            <div>
              {experience.map((item, i) => (
                <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  controls={controls}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
