import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import TotalContainer from "@/components/shared/TotalContainer";
import { IProduct } from "@/types/product.type";
import { getPagenateProducts } from "@/app/api/products";
import React from "react";
import ClientProducts from "./ClientProducts";
import Error from "../error";

const Products = async () => {
  try {
    const res = await getPagenateProducts({ page: 1, limit: 0 });
    const products: IProduct[] = res.data.data;

    if (!products) return <div>Products not found</div>;

    return (
      <PageContainer>
        <PageHeader
          title="Products"
          route={[
            { name: "Dashboard", path: "/" },
            { name: "Products", path: "/products" },
          ]}
        />
        <TotalContainer>
          <ClientProducts products={products} />
        </TotalContainer>
      </PageContainer>
    );
  } catch (e) {
    return <Error />;
  }
};

export default Products;
export const dynamic = "force-dynamic";
