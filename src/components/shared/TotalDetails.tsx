"use client";

import { FaArrowUp } from "react-icons/fa";
interface TotalDetailsProps {
  number?: number;
  title?: string;
}

const TotalDetails: React.FC<TotalDetailsProps> = ({ number, title }) => {
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
        className="
            flex
            items-center
            gap-1
            text-sm
            font-medium
            text-meta-3
            "
      >
        <p>0.25</p>
        <FaArrowUp />
      </div>
    </div>
  );
};

export default TotalDetails;
