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
import { onOpen, setParent, setTarget } from "@/store/slice/delete";
import Image from "next/image";
import { safeImgDisplay } from "@/utils/functions";
import { useCallback, useEffect, useState } from "react";
import { getTargetSubCat } from "@/app/api/category";
import useUser from "../useUser";
import toast from "react-hot-toast";
import {
  onOpenAction,
  setAction,
  setTargetAction,
  setTargetParent,
  toggleReRender,
} from "@/store/slice/add-update";
import { RootState } from "@/store/store";

const useCategoriesConfig = () => {
  const [loading, setLoading] = useState(false);
  const [subCategoriesObj, setSubCategoriesObj] = useState<any>();

  const { user } = useUser();
  const router = useRouter();
  const dispatch = useDispatch();

  const reRender = useSelector((state: RootState) => state.addUpdate.reRender);

  const parent = useSelector((state: RootState) => state.addUpdate.parent);

  const getSubHandler = useCallback(
    async (_id: string, target: "products" | "services" | any) => {
      try {
        setLoading(true);
        const res = await getTargetSubCat(target, _id, user?.token);
        const subCategories = res.data;
        setSubCategoriesObj({ target, subCategories });
        setLoading(false);
        toast.success("Sub Categories fetched successfully");
      } catch (err) {
        setLoading(false);
        toast.error("couldn't fetch Sub Categories");
      }
    },
    [user]
  );

  useEffect(() => {
    router.refresh();
    if (reRender) {
      console.log(parent._id, parent.target);
      getSubHandler(parent._id, parent.target);
      dispatch(toggleReRender());
    }
  }, [reRender, parent, dispatch, getSubHandler, router]);

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
    const category = row.original;
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

            {(category.parent === "products" ||
              category.parent === "services") && (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  const id = category._id;
                  const target = category.parent;
                  getSubHandler(id, target);
                  dispatch(setTargetParent({ parent: { _id: id, target } }));
                }}
              >
                {loading ? "Fetching..." : "View SubCategories"}
              </DropdownMenuItem>
            )}

            <DropdownMenuItem
              className={`cursor-pointer`}
              onClick={() => {
                if (
                  category.parent === "products" ||
                  category.parent === "services"
                )
                  return router.push(
                    `/categories/edit?target=${category.parent}&id=${category._id}`
                  );

                dispatch(
                  setTargetAction({
                    id: category._id,
                    name: category.name,
                    target: subCategoriesObj.target,
                  })
                );
                dispatch(onOpenAction());
                dispatch(setAction({ action: "edit" }));
              }}
            >
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`cursor-pointer text-meta-1 ${styles.deleteBtn}`}
              onClick={() => {
                dispatch(
                  setTarget({
                    target: "",
                  })
                );
                dispatch(
                  setTarget({
                    id: category._id,
                    name: category.name,
                    target: subCategoriesObj?.target || category.parent,
                  })
                );

                category.parent === "products" || category.parent === "services"
                  ? dispatch(setParent({ targetName: "parent" }))
                  : dispatch(setParent({ targetName: "child" }));

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

  const mainColumns: ColumnDef<ICategory>[] = [
    {
      header: () => <p className="p-0 text text-center">Photo</p>,
      accessorKey: "photo",
      cell: ({ row }) => {
        const category = row.original;
        return (
          <Image
            width={50}
            height={50}
            src={safeImgDisplay({ photoUrl: category.photo })}
            alt="category"
            className="h-8 w-8 rounded-full mx-auto object-cover"
          />
        );
      },
    },
    {
      header: (props) => sort(props, "ID"),
      accessorKey: "_id",
    },

    {
      header: (props) => sort(props, "Name"),
      accessorKey: "name",
    },
    {
      header: (props) => sort(props, "Description"),
      accessorKey: "description",
    },
    {
      header: () => <p className="text-bold text-center px-2">Actions</p>,
      id: "actions",
      cell: ({ row }) => actions(row),
    },
  ];

  const subColumns: ColumnDef<ICategory>[] = [
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

  return [mainColumns, subColumns, subCategoriesObj];
};

export default useCategoriesConfig;
