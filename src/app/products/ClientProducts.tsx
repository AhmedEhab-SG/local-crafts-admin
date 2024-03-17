"use client";

import DataTable from "@/components/DataTable";
import DeleteModel from "@/components/models/DeleteModel";
import useProductsConfig from "@/hooks/config/useProductsConfig";
import { FC } from "react";
import { deleteProduct } from "../actions/api/products";
import { Product } from "@/types/products";

interface ClientProductsProps {
  products: Product[];
}

const ClientProducts: FC<ClientProductsProps> = ({ products }) => {
  const [column] = useProductsConfig();
  console.log(products);

  return (
    <>
      <DataTable columns={column} data={products} />
      <DeleteModel deleteFunction={deleteProduct} />
    </>
  );
};

export default ClientProducts;
