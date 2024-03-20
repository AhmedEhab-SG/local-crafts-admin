"use client";

import DataTable from "@/components/DataTable";
import DeleteModel from "@/components/models/DeleteModel";
import { FC, useCallback } from "react";
import { deleteOrder } from "../api/orders";
import TotalContainer from "@/components/shared/TotalContainer";
import { ICategory } from "@/types/category.type";
import useCategoriesConfig from "@/hooks/config/useCategoriesConfig";
import AddUpdateModel from "@/components/models/AddUpdateModel";
import {
  createTargetCategory,
  createTargetSubCat,
  delelteTargetCatOrSub,
  updateTargetCatOrSub,
} from "../api/category";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { onOpenAction, setAction } from "@/store/slice/add-update";

interface ClientCategoriesProps {
  prodCategories: ICategory[];
  servCategories: ICategory[];
}

const ClientCategories: FC<ClientCategoriesProps> = ({
  prodCategories,
  servCategories,
}) => {
  const [columns, subColumns, subCategoriesObj] = useCategoriesConfig();
  const dispatch = useDispatch();

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
              subCategoriesObj?.target === "products"
                ? "w-full lg:w-1/2"
                : "w-full"
            }`}
            title="Products Categories"
            columns={columns}
            data={prodCategoriesData}
          />

          {subCategoriesObj?.target === "products" && (
            <DataTable
              className={`${
                subCategoriesObj?.target === "products"
                  ? "w-full lg:w-1/2"
                  : "w-full"
              }`}
              title="Products Sub Categories"
              columns={subColumns}
              data={subCategoriesObj?.subCategories}
              onClick={() => {
                dispatch(setAction({ action: "add" }));
                dispatch(onOpenAction());
              }}
            />
          )}
        </div>
      </TotalContainer>

      <TotalContainer>
        <div className="flex justify-center flex-col lg:flex-row gap-5 items-center">
          <DataTable
            className={`${
              subCategoriesObj?.target === "services"
                ? "w-full lg:w-1/2"
                : "w-full"
            }`}
            title="Services Categories"
            columns={columns}
            data={servCategoriesData}
          />

          {subCategoriesObj?.target === "services" && (
            <DataTable
              className={`${
                subCategoriesObj?.target === "services"
                  ? "w-full lg:w-1/2"
                  : "w-full"
              }`}
              title="Services Sub Categories"
              columns={subColumns}
              data={subCategoriesObj?.subCategories}
              onClick={() => {
                dispatch(setAction({ action: "add" }));
                dispatch(onOpenAction());
              }}
            />
          )}
        </div>
      </TotalContainer>

      <AddUpdateModel
        updateFunction={updateTargetCatOrSub}
        addFunction={createTargetSubCat}
      />
      <DeleteModel deleteFunction={delelteTargetCatOrSub} />
    </div>
  );
};

export default ClientCategories;
