"use client";

import DataTable from "@/components/DataTable";
import DeleteModel from "@/components/models/DeleteModel";
import useOrdersConfig from "@/hooks/config/useOrderConfig";
import { FC } from "react";
import { IOrder } from "@/types/order.type";
import { deleteOrder } from "../api/orders";
import TotalContainer from "@/components/shared/TotalContainer";

interface ClientOrdersProps {
  orders: IOrder[];
}

const ClientOrders: FC<ClientOrdersProps> = ({ orders }) => {
  const productsOrders = orders.filter((order) => order.product);
  const servicesOrders = orders.filter((order) => order.service);

  const [productsColumns, servicesColumns] = useOrdersConfig();

  return (
    <div className="flex flex-col gap-5">
      <TotalContainer>
        <DataTable
          title="Products Orders"
          columns={productsColumns}
          data={productsOrders}
        />
      </TotalContainer>

      <TotalContainer>
        <DataTable
          title="Services Orders"
          columns={servicesColumns}
          data={servicesOrders}
        />
      </TotalContainer>

      <DeleteModel deleteFunction={deleteOrder} />
    </div>
  );
};

export default ClientOrders;
