"use client";

import { closeDrawer } from "@/store/slice/settings";
import Link from "next/link";
import { CSSProperties } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";

interface ListContainerProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  children?: React.ReactNode;
  onClick?: () => void;
  dropDwon?: boolean;
  styles?: CSSProperties;
}

const ListContainer: React.FC<ListContainerProps> = ({
  icon,
  title,
  children,
  link,
  dropDwon,
  onClick,
  styles,
}) => {
  const dispatch = useDispatch();
  return (
    <li style={styles}>
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
          onClick={() => dispatch(closeDrawer())}
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
