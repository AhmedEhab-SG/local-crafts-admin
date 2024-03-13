"use client";

import { FC } from "react";

interface ChartHeaderProps {
  title?: string[];
}

const ChartHeader: FC<ChartHeaderProps> = ({ title }) => {
  const text = title?.join(" & ");

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
        {text}
      </h4>
    </div>
  );
};

export default ChartHeader;
