"use client";

import { IUser } from "@/types/user.type";
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
import { updateUser } from "@/app/api/users";

const useUsersConfig = () => {
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

  const colums: ColumnDef<IUser>[] = [
    {
      header: (props) => sort(props, "ID"),
      accessorKey: "id",
    },
    {
      header: (props) => sort(props, "Email"),
      accessorKey: "email",
    },
    {
      header: (props) => sort(props, "Name"),
      accessorKey: "name",
    },
    {
      header: (props) => sort(props, "Governorate"),
      accessorKey: "address.gov",
    },
    {
      header: (props) => sort(props, "City"),
      accessorKey: "address.city",
    },

    {
      header: (props) => sort(props, "Role"),
      accessorKey: "role",
    },
    {
      header: () => <p className="text-bold px-2">Actions</p>,
      id: "actions",
      cell: ({ row }) => {
        const user = row.original;

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
                    const id = user.id;
                    router.push(`/users/${id}`);
                  }}
                >
                  View
                </DropdownMenuItem>

                <DropdownMenuItem
                  className={`cursor-pointer text-meta-1 ${styles.deleteBtn}`}
                  onClick={() => {
                    dispatch(setTarget({ id: user.id, name: user.name }));
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

export default useUsersConfig;
