"use client";

import { FC, ReactNode } from "react";

interface BtnHeaderProps {
  onClick: () => void;
  SvgLogo: ReactNode;
  title: string;
}

const BtnHeader: FC<BtnHeaderProps> = ({ onClick, SvgLogo, title }) => {
  return (
    <button
      className="
      flex 
      items-center 
      gap-3.5 
      px-6 
      py-4 
      text-sm 
      font-medium 
      duration-300 
      ease-in-out 
      hover:text-primary 
      lg:text-md"
      onClick={onClick}
    >
      {SvgLogo}
      <span>{title}</span>
    </button>
  );
};

export default BtnHeader;
