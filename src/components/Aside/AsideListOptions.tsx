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

const AsideListOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        styles={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(10px)",
          transition: `all ${index * 0.5}s cubic-bezier(0.17, 0.55, 0.55, 1)${
            index * 0.2
          }s`,
        }}
        header={header}
        headerLink={headerLink}
        key={index}
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
        w-full"
    >
      {adminCommands}
    </ul>
  );
};

export default AsideListOptions;
