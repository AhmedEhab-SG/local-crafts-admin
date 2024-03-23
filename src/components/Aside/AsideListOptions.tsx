"use client";

import React from "react";
import DashboardSvg from "@/assets/svg/Dashboard.svg";
import DashboardSection from "./DashboardSection";
import { MdDesignServices } from "react-icons/md";
import OrdersSvg from "@/assets/svg/Orders.svg";
import ProductsSvg from "@/assets/svg/Products.svg";
import { LocateIcon, Users2Icon } from "lucide-react";
import { BiCategoryAlt } from "react-icons/bi";
import { useRef } from "react";
import { useInView } from "framer-motion";
import useUser from "@/hooks/useUser";
import useDelay from "@/hooks/useDelay";

const AsideListOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { user } = useUser();

  const [delay] = useDelay(50, user ? true : false);

  const category = [
    {
      nav: "/categories/add",
      title: "Add Category",
    },
  ];

  const commands = [
    {
      header: "Dashboard",
      headerLink: "/",
      SvgLogo: <DashboardSvg />,
    },
    {
      header: "Products",
      headerLink: "/products",
      SvgLogo: <ProductsSvg />,
    },
    {
      header: "Services",
      headerLink: "/services",
      SvgLogo: <MdDesignServices />,
    },
    {
      header: "Orders",
      headerLink: "/orders",
      SvgLogo: <OrdersSvg />,
    },
    {
      header: "Users",
      headerLink: "/users",
      SvgLogo: <Users2Icon />,
    },
    {
      header: "Locations",
      headerLink: "/locations",
      SvgLogo: <LocateIcon />,
    },
    {
      header: "Categories",
      headerLink: "/categories",
      SvgLogo: <BiCategoryAlt />,
    },
  ];

  const adminCommands = commands.map(
    ({ header, headerLink, SvgLogo }, index) => (
      <DashboardSection
        key={index}
        styles={{ transitionDelay: `${index * 0.2}s` }}
        liClassName={` ${user ? "block" : "hidden"}`}
        divClassName={`
        translate
        duration-500
        ${delay ? "translate-y-0" : "-translate-y-full"}
        ${delay ? "opacity-100" : "opacity-0"} `}
        header={header}
        headerLink={headerLink}
        SvgLogo={SvgLogo}
        dropDwon={index === commands.length - 1}
        show={index === commands.length - 1}
        lists={index === commands.length - 1 ? category : []}
      />
    )
  );

  return (
    <ul
      ref={ref}
      className="
        mb-6
        flex
        flex-col
        gap-10
        w-full
       
        "
    >
      {user ? (
        adminCommands
      ) : (
        <p
          className={`
          text-center 
          translate
          duration-1000
          delay-300
          text-lg 
          ${isInView ? "translate-y-0" : "translate-y-full"}
          ${isInView ? "opacity-100" : "opacity-0"} 
          ${!user ? "block" : "hidden"}`}
        >
          Please Sign In first to see the admin commands
        </p>
      )}
    </ul>
  );
};

export default AsideListOptions;
