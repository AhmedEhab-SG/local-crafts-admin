"use client";

import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import TotalContainer from "@/components/shared/TotalContainer";
import { Product } from "@/types/products";
import { FC } from "react";

interface ClientProductProps {
  product: Product;
}

const ClientProduct: FC<ClientProductProps> = ({ product }) => {
  return (
    <PageContainer>
      <PageHeader title={product.name} />
      <TotalContainer></TotalContainer>
    </PageContainer>
  );
};

export default ClientProduct;
