"use client";

import { ICategory } from "@/types/category.type";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import styles from "@/styles/config.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { onOpen, setTarget } from "@/store/slice/delete";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  onOpenAction,
  setAction,
  setTargetAction,
  setTargetParent,
  toggleReRender,
} from "@/store/slice/add-update";
import { RootState } from "@/store/store";
import { getTargetLocations } from "@/app/api/locations";

const useLocationsConfig = () => {
  const [loading, setLoading] = useState(false);
  const [citiesObj, setCitiesObj] = useState<any>();

  const router = useRouter();
  const dispatch = useDispatch();

  const reRender = useSelector((state: RootState) => state.addUpdate.reRender);

  const parent = useSelector((state: RootState) => state.addUpdate.parent);

  const getSubHandler = useCallback(async (_id: string) => {
    try {
      setLoading(true);
      const res = await getTargetLocations("cities", _id);
      const cities = res.data;
      setCitiesObj(cities);
      setLoading(false);
      toast.success("Sub Governorate fetched successfully");
    } catch (err) {
      setLoading(false);
      toast.error("couldn't fetch Sub Governorate");
    }
  }, []);

  useEffect(() => {
    if (reRender) {
      getSubHandler(parent._id);
      dispatch(toggleReRender());
    }
  }, [reRender, dispatch, getSubHandler, parent._id]);

  const sort = ({ column }: any, name: string) => {
    {
      return (
        <Button
          className="p-0 text"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {name}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  };

  const actions = (row: any) => {
    const locations = row.original;

    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="dark:bg-slate-700 h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <hr />
            <DropdownMenuSeparator />

            {!locations.gov && (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  const id = locations._id;

                  const target = locations.parent;
                  getSubHandler(id);
                  dispatch(setTargetParent({ parent: { _id: id, target } }));
                }}
              >
                {loading ? "Fetching..." : "View Cities"}
              </DropdownMenuItem>
            )}

            <DropdownMenuItem
              className={`cursor-pointer text-meta-1 ${styles.deleteBtn}`}
              onClick={() => {
                dispatch(
                  setTarget({
                    id: locations._id,
                    name: locations.name,
                    target: locations.parent || "cities",
                  })
                );
                dispatch(onOpen());
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  };

  const columns: ColumnDef<ICategory>[] = [
    {
      header: (props) => sort(props, "ID"),
      accessorKey: "_id",
    },

    {
      header: (props) => sort(props, "Name"),
      accessorKey: "name",
    },
    {
      header: () => <p className="text-bold text-center px-2">Actions</p>,
      id: "actions",
      cell: ({ row }) => actions(row),
    },
  ];

  return [columns, citiesObj];
};

export default useLocationsConfig;
