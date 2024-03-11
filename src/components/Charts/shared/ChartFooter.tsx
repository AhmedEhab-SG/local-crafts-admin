"use client";

import { FC } from "react";

interface ChartFooterProps {
  info?: { total?: string; title?: string; color?: string }[];
}

const ChartFooter: FC<ChartFooterProps> = ({ info }) => {
  return (
    <div
      className="
        mb-8
        flex
        flex-wrap
        items-center
        justify-center
        gap-y-3"
    >
      {info?.map(({ total, title, color }, index) => (
        <div key={index} className="w-full px-8 sm:w-1/2">
          <div className="flex items-center">
            <div
              className={`mr-2 h-3 w-full max-w-3 rounded-full bg-[${color}] `}
            ></div>
            <div className="flex w-full justify-between text-sm font-medium gap-3 text-black dark:text-white">
              <p>{title}</p>
              <p>{total}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartFooter;
