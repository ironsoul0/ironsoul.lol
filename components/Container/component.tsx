import clsx from "clsx";
import React, { FC } from "react";

import { Props } from "./props";

export const Container: FC<Props> = ({ className, children }: Props) => {
  return (
    <div className={clsx("px-4 mx-auto max-w-screen-md", className)}>
      {children}
    </div>
  );
};
