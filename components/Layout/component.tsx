import React, { FC } from "react";

import { Props } from "./props";

export const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="min-h-screen text-white bg-white-300 dark:bg-black-400">
      {children}
    </div>
  );
};
