import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useMdScreen } from "lib";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Item } from "./libs/Item";

const experience = [
  {
    title: "React Native Participant",
    place: "N17R Incubator, Almaty",
    date: "Jun 2018 - Aug 2018",
  },
  {
    title: "SWE Intern",
    place: "Yandex, Moscow",
    date: "Jun 2019 - Aug 2019",
  },
  {
    title: "Ethereum Foundation",
    place: "Blockchain Intern, Remote",
    date: "Jun 2020 - Aug 2020",
  },
  {
    title: "Frontend Engineer",
    place: "alabs.team, Almaty",
    date: "Jan 2021 - Currently",
  },
  {
    title: "SWE Intern",
    place: "Citadel, Hong Kong",
    date: "May 2021 - Aug 2021",
  },
  {
    title: "TBA",
    place: "TBA",
    date: "Sep 2021 - ...",
  },
];

export const Experience: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const mdScreen = useMdScreen();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

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
