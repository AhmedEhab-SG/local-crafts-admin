"use client";

import useUser from "@/hooks/useUser";
import { closeDrawer } from "@/store/slice/settings";
import Link from "next/link";
import { CSSProperties } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

interface ListContainerProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  children?: React.ReactNode;
  onClick?: () => void;
  dropDwon?: boolean;
  styles?: CSSProperties;
  delay?: boolean;
  liClassName?: string;
  divClassName?: string;
}

const ListContainer: React.FC<ListContainerProps> = ({
  icon,
  title,
  children,
  link,
  dropDwon,
  onClick,
  liClassName,
  divClassName,
  styles,
}) => {
  const dispatch = useDispatch();

  return (
    <li className={liClassName}>
      <div style={styles} className={divClassName}>
        <div
          className={`
          flex
          items-center
          justify-between
          pr-5
          `}
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
      </div>
    </li>
  );
};

export default ListContainer;
