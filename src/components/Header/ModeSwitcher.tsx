"use client";

import DarkModeSvg from "@/assets/svg/DarkMode.svg";
import LightMode from "@/assets/svg/LightMode.svg";

import { toggleMode } from "@/store/slice/settings";
import { RootState } from "@/store/store";
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModeSwitcher = () => {
  const mode = useSelector((state: RootState) => state.settings.mode);

  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode, dispatch]);

  return (
    <div>
      <label
        className={`
          relative m-0 block h-7.5 w-14 rounded-full ${
            mode === "dark" ? "bg-primary" : "bg-stroke"
          }`}
      >
        <input
          type="checkbox"
          onChange={() => {
            dispatch(toggleMode());
          }}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
            mode === "dark" && "!right-[3px] !translate-x-full"
          }`}
        >
          <span className="dark:hidden">
            <LightMode />
          </span>
          <span className="hidden dark:inline-block">
            <DarkModeSvg />
          </span>
        </span>
      </label>
    </div>
  );
};

export default ModeSwitcher;
