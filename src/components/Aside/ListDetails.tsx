"use client";

import Link from "next/link";

interface ListDetailsProps {
  title: string;
  nav: string;
}

const ListDetails: React.FC<ListDetailsProps> = ({ title, nav }) => {
  return (
    <ul
      className={`
        mb-5.5 
        flex
        mt-4 
        flex-col 
        gap-2.5
        pl-6
        duration-300 
        ease-linear 
        transition-all`}
    >
      <li>
        <Link
          href={nav}
          className="group px-4 font-medium text-bodydark2 duration-300 transition-all ease-in-out hover:text-white"
        >
          {title}
        </Link>
      </li>
    </ul>
  );
};

export default ListDetails;
