"use client";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
interface TotalDetailsProps {
  number?: number;
  title?: string;
  relatieChange?: any;
}

const TotalDetails: React.FC<TotalDetailsProps> = ({
  number,
  title,
  relatieChange,
}) => {
  return (
    <div
      className="
        mt-4
        flex
        items-end
        justify-between"
    >
      <div>
        <h4
          className="
            text-title-md
            font-bold
            text-black
            dark:text-white
            "
        >
          {number}
        </h4>
        <p
          className="
            text-md
            font-semibold"
        >
          Total {title}
        </p>
      </div>
      <div
        className={`
            flex
            items-center
            gap-1
            text-sm
            font-medium
            ${relatieChange ? "text-meta-3" : "text-meta-1"}`}
      >
        {relatieChange ? (
          <>
            <p>+{relatieChange}</p>
            <FaArrowUp />
          </>
        ) : (
          <>
            <p>-{relatieChange}</p>
            <FaArrowDown />
          </>
        )}
        <span className="text-xs">monthly</span>
      </div>
    </div>
  );
};

export default TotalDetails;
