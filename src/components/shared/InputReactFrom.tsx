"use client";

import { ChangeEvent } from "react";
import {
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
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
  onclick?: () => void;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrorsImpl<FieldErrors>;
}

const InputReactForm: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  serach,
  bgDark,
  required,
  borders,
  errors,
  register,
  onclick,
}) => {
  return (
    <div className="w-full relative">
      {serach && (
        <BiSearch
          size={24}
          onClick={onclick}
          className="text-bodydark2 hover:text-graydark cursor-pointer transition absolute top-5 left-2"
        />
      )}

      <input
        placeholder=" "
        disabled={disabled}
        {...register(id, required)}
        type={type}
        id={id}
        name={id}
        className={`
        peer
        w-full
        p-3
        pt-6
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
          errors[id]
            ? "border-rose-500"
            : borders
            ? "border-bodydark dark:border-form-strokedark"
            : "border-none"
        }
        ${
          errors[id]
            ? "focus:border-rose-500"
            : "focus:border-black dark:focus:border-bodydark1"
        }`}
      />
      {errors[id]?.message && (
        <p className="text-rose-500  p-1 pl-2">{errors[id]?.message}</p>
      )}
      <label
        htmlFor={id}
        className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        pointer-events-none
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${serach ? "left-9" : "left-4"}
        ${errors[id] ? "text-rose-500" : "text-zinc-400 dark:text-bodydark2"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputReactForm;
