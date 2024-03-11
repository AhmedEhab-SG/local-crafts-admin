"use client";

import { FC } from "react";

interface ChartHeaderProps {
  title?: string;
}

const ChartHeader: FC<ChartHeaderProps> = ({ title }) => {
  return (
    <div
      className="
        mb-4
        jsutify-between
        gap-4
        sm:flex"
    >
      <h4
        className="
          text-xl
          font-semibold
          text-black
          dark:text-white"
      >
        {title}
      </h4>
    </div>
  );
};

export default ChartHeader;
