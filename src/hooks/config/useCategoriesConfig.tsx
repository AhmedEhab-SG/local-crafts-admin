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
import { useDispatch } from "react-redux";
import { onOpen, setTarget } from "@/store/slice/delete";
import Image from "next/image";
import { safeImgDisplay } from "@/utils/functions";
import { useCallback, useState } from "react";
import { getTargetSubCat } from "@/app/api/category";
import useUser from "../useUser";
import toast from "react-hot-toast";

const useCategoriesConfig = () => {
  const [loading, setLoading] = useState(false);
  const [subCategoriesObj, setSubCategoriesObj] = useState<any>();
  const { user } = useUser();
  const router = useRouter();
  const dispatch = useDispatch();

  const getSubHandler = useCallback(
    async (_id: string, target: "products" | "services") => {
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

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                const id = category._id;
                const target = category.parent;
                getSubHandler(id, target);
              }}
            >
              {loading ? "Fetching..." : "View SubCategories"}
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`cursor-pointer text-meta-1 ${styles.deleteBtn}`}
              onClick={() => {
                dispatch(
                  setTarget({
                    id: category._id,
                    name: category.product?.name,
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
      header: (props) => sort(props, "Photo"),
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
      header: () => <p className="text-bold px-2">Actions</p>,
      id: "actions",
      cell: ({ row }) => actions(row),
    },
  ];

  return [columns, subCategoriesObj];
};

export default useCategoriesConfig;
