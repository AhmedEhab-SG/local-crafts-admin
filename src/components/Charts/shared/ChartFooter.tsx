"use client";

import { FC } from "react";

interface ChartFooterProps {
  info?: { total?: string; name?: string; color?: string }[];
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
      {info?.map(({ total, name, color }, index) => (
        <div key={index} className="w-full px-8 sm:w-1/2">
          <div className="flex items-center">
            {color && (
              <div
                className={`mr-2  w-full max-w-3 rounded-full text-[${color}] `}
              >
                ⦿
              </div>
            )}
            <div className="flex w-full justify-between text-sm font-medium gap-3 text-black dark:text-white">
              <p>{name}</p>
              <p>{total}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartFooter;
