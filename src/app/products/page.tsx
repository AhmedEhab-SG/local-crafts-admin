import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import TotalContainer from "@/components/shared/TotalContainer";
import { Product } from "@/types/products";
import { getPagenateProducts } from "@/utils/api/products";
import React from "react";
import ClientProducts from "./ClientProducts";
import ClientOnly from "@/components/shared/ClientOnly";

const Products = async () => {
  const res = await getPagenateProducts({ page: 1, limit: 0 });
  const products: Product[] = res.data.data;

  if (!products) return <div>Products not found</div>;

  return (
    <ClientOnly>
      <PageContainer>
        <PageHeader
          title="Products"
          route={[
            { name: "Dashboard", path: "/" },
            { name: "products", path: "/products" },
          ]}
        />
        <TotalContainer>
          <ClientProducts products={products} />
        </TotalContainer>
      </PageContainer>
    </ClientOnly>
  );
};

export default Products;
