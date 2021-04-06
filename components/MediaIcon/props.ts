import React, { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLAnchorElement> & {
  icon: React.ReactElement;
  href: string;
};
