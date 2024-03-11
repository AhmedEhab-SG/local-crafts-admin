"use client";

import { FC, ReactNode } from "react";

interface ChartContainerProps {
  children?: ReactNode;
}

const ChartContainer: FC<ChartContainerProps> = ({ children }) => {
  return (
    <div
      className="
       flex-grow
        rounded-sm
        border
        border-stroke
        bg-white
        p-7.5
        shadow-default
        dark:border-strokedark
        dark:bg-boxdark
       "
    >
      {children}
    </div>
  );
};

export default ChartContainer;
