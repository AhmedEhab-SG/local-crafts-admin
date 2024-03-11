"use client";

import { toggleDrawer } from "@/store/slice/settings";
import { RootState } from "@/store/store";
import React from "react";
import { IoClose } from "react-icons/io5";

import { TfiAlignJustify } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";

const ToggleAside = () => {
  const dispatch = useDispatch();
  const drawer = useSelector((state: RootState) => state.settings.drawer);

  return (
    <button
      onClick={() => dispatch(toggleDrawer())}
      className="
        block 
        rounded-sm 
        border 
        border-stroke 
        bg-white 
        p-1.5 
        shadow-sm 
        dark:border-strokedark
        dark:bg-boxdark 
        lg:hidden 
        text-lg"
    >
      {drawer ? <IoClose /> : <TfiAlignJustify />}
    </button>
  );
};

export default ToggleAside;
