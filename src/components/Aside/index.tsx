"use client";

import Image from "next/image";
import AsideListOptions from "./AsideListOptions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { FaArrowLeft } from "react-icons/fa";
import { toggleDrawer } from "@/store/slice/settings";
import AdminPanelLogo from "../shared/AdminPanelLogo";

const Aside = () => {
  const drawer = useSelector((state: RootState) => state.settings.drawer);

  const dispatch = useDispatch();

  return (
    <>
      <aside
        className={`
        absolute 
        left-0 
        top-0 
        z-20
        flex 
        h-screen 
        w-65
        flex-col
        overflow-y-hidden
        bg-black
        duration-300
        ease-linear
        dark:bg-boxdark
        lg:static
        lg:translate-x-0
        ${drawer ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="
            flex 
            items-center 
            justify-start 
            gap-3
            px-6 
            py-5.5 
            lg:py-6.5
            "
        >
          <AdminPanelLogo title="Admin Panel" styles=" text-bodydark1" />
          <button
            onClick={() => dispatch(toggleDrawer())}
            className="text-bodydark text-lg  lg:hidden"
          >
            <FaArrowLeft />
          </button>
        </div>

        <div
          className="
            flex
            flex-col
            overflow-y-auto
            duration-300
            ease-linear
            w-full
            mt-5
            px-6
            py-4
            lg:mt-9
            lg:px-6
            text-bodydark1
            h-full"
        >
          <h3
            className="
            mb-6 
            ml-4 
            text-sm 
            font-semibold 
            text-bodydark2"
          >
            MENU
          </h3>
          <AsideListOptions />
          <footer className="mt-auto pt-8 self-center text-bodydark2">
            <p>&#169; Local-Crafts-Team</p>
          </footer>
        </div>
      </aside>
      {drawer && (
        <div
          onClick={() => dispatch(toggleDrawer())}
          className="opacity-[0.5] bg-black dark:bg-slate-500 h-screen w-screen absolute z-10"
        ></div>
      )}
    </>
  );
};

export default Aside;
