"use client";

import { closeDrawer } from "@/store/slice/settings";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface ListDetailsProps {
  title: string;
  nav: string;
}

const ListDetails: React.FC<ListDetailsProps> = ({ title, nav }) => {
  const dispatch = useDispatch();
  return (
    <ul
      className={`
         
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
          onClick={() => dispatch(closeDrawer())}
          className="group px-4 font-medium text-bodydark2 duration-300 transition-all ease-in-out hover:text-white"
        >
          {title}
        </Link>
      </li>
    </ul>
  );
};

export default ListDetails;
