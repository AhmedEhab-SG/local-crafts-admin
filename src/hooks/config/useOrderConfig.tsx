"use client";

import { IOrder } from "@/types/order.type";
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

const useOrdersConfig = () => {
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

  const actions = (row: any) => {
    const order = row.original;

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
                const id = order._id;
                router.push(`/orders/${id}`);
              }}
            >
              View
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`cursor-pointer text-meta-1 ${styles.deleteBtn}`}
              onClick={() => {
                dispatch(
                  setTarget({
                    id: order._id,
                    name: order.product?.name,
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

  const productsColumns: ColumnDef<IOrder>[] = [
    {
      header: (props) => sort(props, "ID"),
      accessorKey: "_id",
    },
    {
      header: (props) => sort(props, "Customer Name"),
      accessorKey: "customer.name",
    },
    {
      header: (props) => sort(props, "Vendor Name"),
      accessorKey: "vendor.name",
    },
    {
      header: (props) => sort(props, "Product Name"),
      accessorKey: "product.name",
    },
    {
      header: (props) => sort(props, "Product Price"),
      accessorKey: "product.price",
    },
    {
      header: (props) => sort(props, "Main Category"),
      accessorKey: "product.category.main",
    },
    {
      header: (props) => sort(props, "Total Orders"),
      accessorKey: "product.totalOrders",
    },
    {
      header: (props) => sort(props, "Created At"),
      accessorKey: "product.createdAt",
    },
    {
      header: (props) => sort(props, "Phone"),
      accessorKey: "phone",
    },
    {
      header: () => <p className="text-bold px-2">Actions</p>,
      id: "actions",
      cell: ({ row }) => actions(row),
    },
  ];
  // srervices
  const servicesColumns: ColumnDef<IOrder>[] = [
    {
      header: (props) => sort(props, "ID"),
      accessorKey: "_id",
    },
    {
      header: (props) => sort(props, "Customer Name"),
      accessorKey: "customer.name",
    },
    {
      header: (props) => sort(props, "Vendor Name"),
      accessorKey: "vendor.name",
    },
    {
      header: (props) => sort(props, "Service Name"),
      accessorKey: "service.name",
    },
    {
      header: (props) => sort(props, "Service Price"),
      accessorKey: "service.price",
    },
    {
      header: (props) => sort(props, "Main Category"),
      accessorKey: "service.category.main",
    },
    {
      header: (props) => sort(props, "Total Orders"),
      accessorKey: "service.totalOrders",
    },
    {
      header: (props) => sort(props, "Created At"),
      accessorKey: "service.createdAt",
    },
    {
      header: (props) => sort(props, "Phone"),
      accessorKey: "phone",
    },
    {
      header: () => <p className="text-bold px-2">Actions</p>,
      id: "actions",
      cell: ({ row }) => actions(row),
    },
  ];

  return [productsColumns, servicesColumns];
};

export default useOrdersConfig;
