"use client";

import OrdersSvg from "@/assets/svg/Orders.svg";
import ProductsSvg from "@/assets/svg/Products.svg";
import ServiceSvg from "@/assets/svg/Service.svg";
import UsersSvg from "@/assets/svg/Users.svg";
import BarChart from "@/components/Charts/BarChart";
import DoughnutChart from "@/components/Charts/DoughnutChart";
import TotalModel from "@/components/models/TotalModel";
import PageContainer from "@/components/shared/PageContainer";
import useUser from "@/hooks/useUser";

const HomeClient = () => {
  const { user } = useUser();

  return (
    <PageContainer>
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
        <TotalModel SvgIcon={<ProductsSvg />} number={20} />
        <TotalModel SvgIcon={<OrdersSvg />} number={20} />
        <TotalModel SvgIcon={<ServiceSvg />} number={20} />
        <TotalModel SvgIcon={<UsersSvg />} number={20} />
      </div>

      <div className="mt-4 flex flex-col lg:flex-row justify-center gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DoughnutChart />
        <BarChart />
      </div>
    </PageContainer>
  );
};

export default HomeClient;
