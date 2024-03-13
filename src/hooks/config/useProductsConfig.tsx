"use client";

import { Product } from "@/types/products";
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

const useProductsConfig = () => {
  const router = useRouter();

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

  const colums: ColumnDef<Product>[] = [
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
      header: (props) => sort(props, "Orders"),
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
        return <p>{value ? "Approved" : "Pending"}</p>;
      },
    },
    {
      header: "Actions",
      id: "actions",
      cell: ({ row }) => {
        const product = row.original;

        return (
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
                  const id = product.id;
                  router.push(`/products/${id}`);
                }}
              >
                View
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`cursor-pointer text-meta-1 ${styles.deleteBtn}`}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return [colums];
};

export default useProductsConfig;
