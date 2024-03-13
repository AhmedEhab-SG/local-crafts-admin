"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";

interface ButtonStyledProps {
  elemType?: string;
  SvgIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  title?: string;
  href?: string;
  target?: string;
}

const ButtonStyled: FC<ButtonStyledProps> = ({
  SvgIcon,
  className,
  onClick,
  type = "button",
  disabled,
  href,
  title,
  target,
  elemType = "button",
}) => {
  return (
    <>
      {elemType === "button" ? (
        <button
          onClick={onClick}
          type={type}
          disabled={disabled}
          className={`
            mt-7 
            inline-flex 
            items-center
            gap-2
            rounded-md
            bg-primary
            px-6
            py-3
            font-medium
            text-white
            hover:bg-opacity-90 
      ${className}`}
        >
          {SvgIcon}
          {title}
        </button>
      ) : (
        <Link
          href={href || "/"}
          onClick={onClick}
          target={target}
          className={`
            mt-7 
            inline-flex 
            items-center
            gap-2
            rounded-md
            bg-primary
            px-6
            py-3
            font-medium
            text-white
            hover:bg-opacity-90 
        ${className}`}
        >
          {SvgIcon}
          {title}
        </Link>
      )}
    </>
  );
};

export default ButtonStyled;
