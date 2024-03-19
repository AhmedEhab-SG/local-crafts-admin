"use client";

import DetailModel from "@/components/models/DetailModel";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import TotalContainer from "@/components/shared/TotalContainer";
import { IProduct } from "@/types/product.type";
import { FC } from "react";

interface ClientProductProps {
  product: IProduct;
}

const ClientProductDetails: FC<ClientProductProps> = ({ product }) => {
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

export default ClientProductDetails;
