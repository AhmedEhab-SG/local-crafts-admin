"use client";

import { ReactNode, useState } from "react";
import HeaderUiDetails from "./HeaderUiDetails";

interface HeaderUiIconsProps {
  SvgIcon: ReactNode;
  title?: string;
}

const HeaderUiIcons: React.FC<HeaderUiIconsProps> = ({ SvgIcon, title }) => {
  const [isNotiftication, setIsNotiftication] = useState(true);
  const [toggleOpen, setToggleOpen] = useState(false);

  const notifactionHandler = () => {
    setIsNotiftication(() => false);
  };

  const toggleHandler = () => {
    setToggleOpen((prev) => !prev);
  };

  const closeNotification = () => {
    setToggleOpen(() => false);
  };

  const iconHandler = () => {
    notifactionHandler();
    toggleHandler();
  };

  return (
    <div className="relative">
      <div
        className="
        flex
        h-8.5
        w-8.5
        items-center
        justify-center
        rounded-full
        border-[0.5px]
        border-stroke
        bg-gray
        hover:text-primary
        dark:border-strokedark
        dark:bg-meta-4
        dark:text-white
        cursor-pointer"
        onClick={iconHandler}
      >
        {isNotiftication && (
          <span
            className="
            absolute
            -top-0.5
            right-0
            z-1
            h-2
            w-2
            rounded-full
            bg-meta-1"
          >
            <span
              className="
            absolute
            -z-1
            inline-flex
            h-full
            w-full
            animate-ping
            rounded-full
            bg-meta-1
            opacity-75"
            ></span>
          </span>
        )}
        {SvgIcon}
      </div>
      {toggleOpen && (
        <HeaderUiDetails closeNotification={closeNotification} title={title} />
      )}
    </div>
  );
};

export default HeaderUiIcons;
