"use client";

import { ReactNode } from "react";

interface IconContainerProps {
  SvgIcon: ReactNode;
}

const IconContainer: React.FC<IconContainerProps> = ({ SvgIcon }) => {
  return (
    <div
      className="
        flex
        h-11.5
        w-11.5
        items-center
        justify-center
        rounded-full
        bg-meta-2
        dark:bg-meta-4"
    >
      {SvgIcon}
    </div>
  );
};

export default IconContainer;
