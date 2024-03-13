"use client";

import OrdersSvg from "@/assets/svg/Orders.svg";
import ProductsSvg from "@/assets/svg/Products.svg";
import ServiceSvg from "@/assets/svg/Service.svg";
import UsersSvg from "@/assets/svg/Users.svg";
import BarChart from "@/components/Charts/BarChart";
import DoughnutChart from "@/components/Charts/DoughnutChart";
import TotalModel from "@/components/models/TotalModel";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import { FC } from "react";

interface HomeClientProps {
  data: any;
}

const HomeClient: FC<HomeClientProps> = ({ data }) => {
  const { products, services, users, orders } = data;

  const productsArr = products.data;
  const servicesArr = services.data;
  const usersArr = users.data;
  const ordersArr = orders;

  const dataArr = [
    {
      name: "Products",
      arr: productsArr,
      color: "#3C50E0",
    },
    {
      name: "Services",
      arr: servicesArr,
      color: "#6577F3",
    },
  ];

  const totalData = [
    {
      title: "Products",
      SvgIcon: <ProductsSvg />,
      number: productsArr.length,
      arr: productsArr,
    },
    {
      title: "Services",
      SvgIcon: <ServiceSvg />,
      number: servicesArr.length,
      arr: servicesArr,
    },
    {
      title: "Orders",
      SvgIcon: <OrdersSvg />,
      number: ordersArr.length,
      arr: ordersArr,
    },
    {
      title: "Users",
      SvgIcon: <UsersSvg />,
      number: usersArr.length,
      arr: usersArr,
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        route={[{ name: "/ Dashboard", path: "/" }]}
      />
      <div
        className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            md:gap-6
            xl:grid-cols-4
            2xl:gap-7.5"
      >
        {totalData.map(({ title, number, SvgIcon }, index) => (
          <TotalModel
            key={index}
            title={title}
            SvgIcon={SvgIcon}
            number={number}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-col lg:flex-row justify-center gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DoughnutChart data={dataArr} />
        <BarChart data={dataArr} />
      </div>
    </PageContainer>
  );
};

export default HomeClient;
