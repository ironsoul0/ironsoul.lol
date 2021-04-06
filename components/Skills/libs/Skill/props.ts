import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLAnchorElement> & {
  name: string;
  icon: React.ReactElement;
  href: string;
};
