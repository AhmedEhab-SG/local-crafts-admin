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
      nav: "/categories/add",
      title: "Add Category",
    },
  ];
  // const locations = [
  //   {
  //     nav: "/locations/add",
  //     title: "Add Governorate",
  //   },
  // ];

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
        headerLink="/services"
        SvgLogo={<MdDesignServices />}
      />
      <DashboardSection
        header="Orders"
        headerLink="/orders"
        SvgLogo={<OrdersSvg />}
      />
      <DashboardSection
        header="Users"
        headerLink="/users"
        SvgLogo={<Users2Icon />}
      />
      <DashboardSection
        header="Locations"
        headerLink="/locations"
        SvgLogo={<LocateIcon />}
      />
      <DashboardSection
        header="Categories"
        headerLink="/categories"
        SvgLogo={<BiCategoryAlt />}
        dropDwon
        lists={category}
      />
    </ul>
  );
};

export default AsideListOptions;
