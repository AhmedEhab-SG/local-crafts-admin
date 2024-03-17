"use client";

import DetailModel from "@/components/models/DetailModel";
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
      <PageHeader
        title={"Details"}
        route={[
          { name: "Dashboard", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product._id}` },
        ]}
      />
      <TotalContainer>
        <DetailModel data={product} />
      </TotalContainer>
    </PageContainer>
  );
};

export default ClientProduct;
