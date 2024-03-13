"use client";

import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  serach?: boolean;
  required?: object;
  vaild?: string;
  bgDark?: boolean;
  borders?: boolean;
  value?: string;
  small?: boolean;
  onclick?: () => void;
  errors?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputStyled: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  serach,
  bgDark,
  required,
  borders,
  errors,
  onChange,
  value,
  small,
  onclick,
}) => {
  return (
    <div className="w-full relative">
      {serach && (
        <BiSearch
          size={24}
          onClick={onclick}
          className={`text-bodydark2 hover:text-graydark cursor-pointer transition absolute ${
            small ? "top-1.5 left-1" : "top-5 left-2"
          }`}
        />
      )}

      <input
        placeholder=" "
        disabled={disabled}
        value={value}
        type={type}
        onChange={onChange}
        id={id}
        name={id}
        className={`
        peer
        w-full
        ${small ? "p-1 pt-2 text-sm" : "p-3 pt-6"}
        font-light
        border-2
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        dark:text-bodydark1
        bg-transparent
        ${bgDark ? "dark:bg-boxdark-2" : "dark:bg-transparent"}
        ${serach ? "pl-9" : "pl-4"}
        ${
          errors
            ? "border-rose-500"
            : borders
            ? "border-bodydark dark:border-form-strokedark"
            : "border-none"
        }
        ${
          errors
            ? "focus:border-rose-500"
            : "focus:border-black dark:focus:border-bodydark1"
        }`}
      />
      {errors && <p className="text-rose-500  p-1 pl-2">{errors}</p>}
      <label
        htmlFor={id}
        className={`
        absolute
        text-md
        duration-150
        transform
        z-0
        origin-[0]
        pointer-events-none
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        ${small ? "-translate-y-2" : "-translate-y-3"}
        ${small ? "top-2 text-xs" : "top-5 text-md"}
        ${small ? " peer-focus:-translate-y-2" : " peer-focus:-translate-y-4"}
        ${serach ? "left-9" : "left-4"}
        ${errors ? "text-rose-500" : "text-zinc-400 dark:text-bodydark2"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputStyled;
