"use client";

import DataTable from "@/components/DataTable";
import DeleteModel from "@/components/models/DeleteModel";
import { FC } from "react";
import { deleteOrder } from "../api/orders";
import TotalContainer from "@/components/shared/TotalContainer";
import { ICategory } from "@/types/category.type";
import useCategoriesConfig from "@/hooks/config/useCategoriesConfig";

interface ClientCategoriesProps {
  prodCategories: ICategory[];
  servCategories: ICategory[];
}

const ClientCategories: FC<ClientCategoriesProps> = ({
  prodCategories,
  servCategories,
}) => {
  const [columns, subCategoriesObj] = useCategoriesConfig();

  const prodCategoriesData = prodCategories.map((category) => ({
    ...category,
    parent: "products",
  }));

  const servCategoriesData = servCategories.map((category) => ({
    ...category,
    parent: "services",
  }));

  return (
    <div className="flex flex-col gap-5">
      <TotalContainer>
        <div className="flex justify-center flex-col lg:flex-row gap-5 items-center">
          <DataTable
            className={`${
              subCategoriesObj?.target === "products" && "lg:w-1/2"
            }`}
            title="Products Categories"
            columns={columns}
            data={prodCategoriesData}
          />

          {subCategoriesObj?.target === "products" && (
            <DataTable
              className={`${
                subCategoriesObj?.target === "products" && "lg:w-1/2"
              }`}
              title="Products Sub Categories"
              columns={columns}
              data={subCategoriesObj?.subCategories}
            />
          )}
        </div>
      </TotalContainer>

      <TotalContainer>
        <div className="flex justify-center gap-5 items-center">
          <DataTable
            className={`${
              subCategoriesObj?.target === "services" ? "w-1/2" : "w-full"
            }`}
            title="Services Categories"
            columns={columns}
            data={servCategoriesData}
          />

          {subCategoriesObj?.target === "services" && (
            <DataTable
              className={`${
                subCategoriesObj?.target === "service" ? "w-1/2" : "w-full"
              }`}
              title="Services Sub Categories"
              columns={columns}
              data={subCategoriesObj?.subCategories}
            />
          )}
        </div>
      </TotalContainer>

      <DeleteModel deleteFunction={deleteOrder} />
    </div>
  );
};

export default ClientCategories;
