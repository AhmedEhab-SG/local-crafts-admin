"use client";

import DataTable from "@/components/DataTable";
import DeleteModel from "@/components/models/DeleteModel";
import { FC } from "react";

import TotalContainer from "@/components/shared/TotalContainer";
import { ICategory } from "@/types/category.type";
import useCategoriesConfig from "@/hooks/config/useCategoriesConfig";
import AddUpdateModel from "@/components/models/AddUpdateModel";
import {
  createTargetSubCat,
  delelteTargetCatOrSub,
  updateTargetCatOrSub,
} from "../api/category";
import { useDispatch, useSelector } from "react-redux";

import {
  onOpenAction,
  setAction,
  setTargetAction,
  setTargetParent,
} from "@/store/slice/add-update";
import { IGovernorate } from "@/types/locations.type";
import useLocationsConfig from "@/hooks/config/useLocationsConfig";
import { createTargetLocation, deleteTargetLocation } from "../api/locations";
import { RootState } from "@/store/store";

interface ClientLocationsProps {
  governorates: IGovernorate[];
}

const ClientLocations: FC<ClientLocationsProps> = ({ governorates }) => {
  const [columns, citiesObj] = useLocationsConfig();
  const dispatch = useDispatch();

  const governoratesData = governorates.map((governorate) => ({
    ...governorate,
    parent: "governorates",
  }));

  const _id = useSelector((state: RootState) => state.addUpdate.parent._id);

  return (
    <div className="flex flex-col gap-5">
      <TotalContainer>
        <div className="flex justify-center flex-col lg:flex-row gap-5 items-center">
          <DataTable
            className={`${citiesObj ? "w-full lg:w-1/2" : "w-full"}`}
            title="Governorates Locations"
            columns={columns}
            data={governoratesData}
            onClick={() => {
              dispatch(setAction({ action: "add" }));
              dispatch(onOpenAction());
              dispatch(setTargetParent({ parent: { target: "governorates" } }));
            }}
            btnTitle="Add Governorate"
          />

          {citiesObj && (
            <DataTable
              className={`${citiesObj ? "w-full lg:w-1/2" : "w-full"}`}
              title="Cites Locations"
              columns={columns}
              data={citiesObj}
              onClick={() => {
                dispatch(setAction({ action: "add" }));
                dispatch(onOpenAction());
                dispatch(
                  setTargetParent({ parent: { _id, target: "cities" } })
                );
              }}
              btnTitle="Add City"
            />
          )}
        </div>
      </TotalContainer>

      <AddUpdateModel
        updateFunction={() => {}}
        addFunction={createTargetLocation}
      />
      <DeleteModel deleteFunction={deleteTargetLocation} />
    </div>
  );
};

export default ClientLocations;
