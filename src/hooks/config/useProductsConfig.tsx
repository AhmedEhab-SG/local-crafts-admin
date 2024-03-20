"use client";

import { IProduct } from "@/types/product.type";
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
import ChangeStatus from "@/components/shared/ChangeStatus";
import { updateProduct } from "@/app/api/products";
import { safeImgDisplay } from "@/utils/functions";

import Image from "next/image";

const useProductsConfig = () => {
  const router = useRouter();

  const dispatch = useDispatch();

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

  const colums: ColumnDef<IProduct>[] = [
    {
      header: () => <p className="p-0 text text-center">Photo</p>,
      accessorKey: "photo",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <Image
            width={50}
            height={50}
            src={safeImgDisplay({ photoUrl: product.photos })}
            alt="category"
            className="h-8 w-8 rounded-full mx-auto object-cover"
          />
        );
      },
    },
    {
      header: (props) => sort(props, "ID"),
      accessorKey: "id",
    },
    {
      header: (props) => sort(props, "Name"),
      accessorKey: "name",
    },
    {
      header: (props) => sort(props, "Price"),
      accessorKey: "price",
      cell: ({ row }) =>
        new Intl.NumberFormat("en-EG", {
          style: "currency",
          currency: "EGP",
        }).format(row.getValue("price")),
    },
    {
      header: (props) => sort(props, "Main Category"),
      accessorKey: "category.main",
    },
    {
      header: (props) => sort(props, "Vendor Name"),
      accessorKey: "vendor.name",
    },
    {
      header: (props) => sort(props, "Total Orders"),
      accessorKey: "totalOrders",
    },
    {
      header: (props) => sort(props, "Created At"),
      accessorKey: "createdAt",
      cell: ({ row }) =>
        new Date(row.getValue("createdAt")).toLocaleDateString(),
    },
    {
      header: (props) => sort(props, "Approvals"),
      accessorKey: "approved",
      cell: ({ row }) => {
        const value = row.getValue("approved");

        return (
          <ChangeStatus
            requestFunction={updateProduct}
            id={row.getValue("id")}
            status={value as boolean}
          />
        );
      },
    },
    {
      header: () => <p className="text-bold px-2">Actions</p>,
      id: "actions",
      cell: ({ row }) => {
        const product = row.original;

        return (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="dark:bg-slate-700 h-8 w-8 p-0"
                >
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
                    const id = product.id;
                    router.push(`/products/${id}`);
                  }}
                >
                  View
                </DropdownMenuItem>

                <DropdownMenuItem
                  className={`cursor-pointer text-meta-1 ${styles.deleteBtn}`}
                  onClick={() => {
                    dispatch(setTarget({ id: product.id, name: product.name }));
                    dispatch(onOpen());
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        );
      },
    },
  ];

  return [colums];
};

export default useProductsConfig;
