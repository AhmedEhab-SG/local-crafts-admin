"use client";

import React from "react";
import DashboardSvg from "@/assets/svg/Dashboard.svg";
import DashboardSection from "./DashboardSection";

const AsideListOptions = () => {
  const dashboardLists = [
    {
      nav: "/products",
      title: "Products",
    },
    {
      nav: "/",
      title: "Services",
    },
    {
      nav: "/",
      title: "Users",
    },
  ];

  return (
    <ul
      className="
        mb-6
        flex
        flex-col
        gap-5
        w-full"
    >
      <DashboardSection
        header="Dashboard"
        headerLink="/"
        show
        SvgLogo={<DashboardSvg />}
        lists={dashboardLists}
      />

      <DashboardSection
        header="Products"
        headerLink="/products"
        SvgLogo={<DashboardSvg />}
        lists={dashboardLists}
      />
      <DashboardSection
        header="Services"
        headerLink="/"
        SvgLogo={<DashboardSvg />}
        lists={dashboardLists}
      />
      <DashboardSection
        header="Users"
        headerLink="/"
        SvgLogo={<DashboardSvg />}
        lists={dashboardLists}
      />
      <DashboardSection
        header="Orders"
        headerLink="/"
        SvgLogo={<DashboardSvg />}
        lists={dashboardLists}
      />
    </ul>
  );
};

export default AsideListOptions;
