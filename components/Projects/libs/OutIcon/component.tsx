import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement>;

export const OutIcon: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.5 10.5L21 3M16 3h5v5M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5"
      ></path>
    </svg>
  );
};
