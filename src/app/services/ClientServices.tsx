"use client";

import DataTable from "@/components/DataTable";
import DeleteModel from "@/components/models/DeleteModel";
import useServicesConfig from "@/hooks/config/useServicesConfig";
import { FC } from "react";
import { IService } from "@/types/service.type";
import { deleteService } from "../api/services";

interface ClientServicesProps {
  services: IService[];
}

const ClientServices: FC<ClientServicesProps> = ({ services }) => {
  const [column] = useServicesConfig();

  return (
    <>
      <DataTable columns={column} data={services} />
      <DeleteModel deleteFunction={deleteService} />
    </>
  );
};

export default ClientServices;
