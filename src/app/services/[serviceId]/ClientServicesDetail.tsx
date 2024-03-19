"use client";

import DetailModel from "@/components/models/DetailModel";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import TotalContainer from "@/components/shared/TotalContainer";
import { IService } from "@/types/service.type";
import { FC } from "react";

interface ClientServiceProps {
  service: IService;
}

const ClientServicesDetail: FC<ClientServiceProps> = ({ service }) => {
  return (
    <PageContainer>
      <PageHeader
        title={"Details"}
        route={[
          { name: "Dashboard", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service._id}` },
        ]}
      />
      <TotalContainer>
        <DetailModel data={service} />
      </TotalContainer>
    </PageContainer>
  );
};

export default ClientServicesDetail;
