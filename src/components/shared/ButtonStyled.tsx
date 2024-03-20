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
  transparent?: boolean;
  primary?: boolean;
  danger?: boolean;
  warning?: boolean;
  small?: boolean;
}

const ButtonStyled: FC<ButtonStyledProps> = ({
  SvgIcon,
  className,
  onClick,
  type = "button",
  disabled,
  href,
  title,
  transparent,
  primary,
  warning,
  danger,
  target,
  small,
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
            inline-flex 
            items-center
            justify-center
            gap-2
            rounded-md
           ${primary && "bg-primary border border-primary"}
            ${danger && "bg-danger border border-danger"}
            ${warning && "bg-warning border border-warning"} 
            ${
              transparent &&
              "!bg-transparent border !text-black dark:!text-white"
            }
            font-medium
            ${small ? "text-sm px-4 py-2" : "text-base px-6 py-3"}
            text-white
           ${!disabled && "hover:bg-opacity-90  hover:border-opacity-70"}
            ${disabled && "cursor-not-allowed opacity-70 "}
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
