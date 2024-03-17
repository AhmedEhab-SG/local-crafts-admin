"use client";

import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

interface ListContainerProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  children?: React.ReactNode;
  onClick?: () => void;
  dropDwon?: boolean;
}

const ListContainer: React.FC<ListContainerProps> = ({
  icon,
  title,
  children,
  link,
  dropDwon,
  onClick,
}) => {
  return (
    <li>
      <div
        className="
          flex
          items-center
          justify-between
          pr-5"
      >
        <Link
          className="
          flex
          items-center
          gap-3"
          href={link}
        >
          <div className="fill-current text-bodydark1">{icon}</div>
          <p className="font-semibold">{title}</p>
        </Link>
        {dropDwon && (
          <MdKeyboardArrowDown className="cursor-pointer" onClick={onClick} />
        )}
      </div>

      {children}
    </li>
  );
};

export default ListContainer;
