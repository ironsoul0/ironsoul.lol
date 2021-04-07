import { Container, Section } from "components";
import React, { FC } from "react";

export const Contact: FC = () => {
  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title="Wanna reach out?"
      description="Maybe you have some interesting project to work on or just want to hang out? Feel free to drop me a message."
    >
      <Container>
        <div className="mt-4">
          <a
            href="mailto:temirzhan.yussupov@gmail.com"
            className="text-base font-medium md:text-xl text-black-900 dark:text-white-900"
          >
            temirzhan.yussupov@gmail.com
          </a>
        </div>
      </Container>
    </Section>
  );
};
