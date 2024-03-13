"use client";

import DataTable from "@/components/DataTable";
import useProductsConfig from "@/hooks/config/useProductsConfig";
import { FC } from "react";

interface ClientProductsProps {
  products: any[];
}

const ClientProducts: FC<ClientProductsProps> = ({ products }) => {
  
  const [column] = useProductsConfig();

  return <DataTable columns={column} data={products} />;
};

export default ClientProducts;
