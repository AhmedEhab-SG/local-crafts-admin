import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import TotalContainer from "@/components/shared/TotalContainer";
import React from "react";
import ClientServices from "./ClientServices";
import Error from "../error";
import { getPagenateServices } from "../api/services";
import { IService } from "@/types/service.type";

const Services = async () => {
  try {
    const res = await getPagenateServices({ page: 1, limit: 0 });
    const services: IService[] = res.data.data;

    if (!services) return <div>Services not found</div>;

    return (
      <PageContainer>
        <PageHeader
          title="Services"
          route={[
            { name: "Dashboard", path: "/" },
            { name: "Services", path: "/services" },
          ]}
        />
        <TotalContainer>
          <ClientServices services={services} />
        </TotalContainer>
      </PageContainer>
    );
  } catch (e) {
    return <Error />;
  }
};

export default Services;
export const dynamic = "force-dynamic";
