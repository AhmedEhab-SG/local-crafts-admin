"use client";

import DataTable from "@/components/DataTable";
import DeleteModel from "@/components/models/DeleteModel";
import useProductsConfig from "@/hooks/config/useProductsConfig";
import { FC } from "react";
import { deleteProduct } from "../api/products";
import { IProduct } from "@/types/product.type";

interface ClientProductsProps {
  products: IProduct[];
}

const ClientProducts: FC<ClientProductsProps> = ({ products }) => {
  const [column] = useProductsConfig();

  return (
    <>
      <DataTable columns={column} data={products} />
      <DeleteModel deleteFunction={deleteProduct} />
    </>
  );
};

export default ClientProducts;
