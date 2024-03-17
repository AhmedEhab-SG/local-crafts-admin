"use client";

import React from "react";
import DashboardSvg from "@/assets/svg/Dashboard.svg";
import DashboardSection from "./DashboardSection";
import { MdDesignServices } from "react-icons/md";
import OrdersSvg from "@/assets/svg/Orders.svg";
import ProductsSvg from "@/assets/svg/Products.svg";
import { LocateIcon, Users2Icon } from "lucide-react";
import { BiCategoryAlt } from "react-icons/bi";

const AsideListOptions = () => {
  const category = [
    {
      nav: "/category/add",
      title: "Add",
    },
  ];
  const locations = [
    {
      nav: "/locations/gov",
      title: "Governorate",
    },
    {
      nav: "/locations/city",
      title: "City",
    },
  ];

  return (
    <ul
      className="
        mb-6
        flex
        flex-col
        gap-10
        w-full"
    >
      <DashboardSection
        header="Dashboard"
        headerLink="/"
        show
        SvgLogo={<DashboardSvg />}
      />

      <DashboardSection
        header="Products"
        headerLink="/products"
        SvgLogo={<ProductsSvg />}
      />
      <DashboardSection
        header="Services"
        headerLink="/"
        SvgLogo={<MdDesignServices />}
      />
      <DashboardSection
        header="Orders"
        headerLink="/"
        SvgLogo={<OrdersSvg />}
      />
      <DashboardSection
        header="Users"
        headerLink="/"
        SvgLogo={<Users2Icon />}
      />
      <DashboardSection
        header="Category"
        headerLink="/"
        SvgLogo={<BiCategoryAlt />}
        lists={category}
        dropDwon
      />
      <DashboardSection
        header="Locations"
        headerLink="/"
        SvgLogo={<LocateIcon />}
        lists={locations}
        dropDwon
      />
    </ul>
  );
};

export default AsideListOptions;
