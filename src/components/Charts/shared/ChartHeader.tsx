"use client";

import { FC } from "react";

interface ChartHeaderProps {
  title?: string[];
  sub?: string;
}

const ChartHeader: FC<ChartHeaderProps> = ({ title, sub }) => {
  const text = title?.join(" & ");

  return (
    <div
      className="
        mb-4
        flex
      justify-between
        items-center
        gap-4
        w-full"
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
      <p>{sub}</p>
    </div>
  );
};

export default ChartHeader;
