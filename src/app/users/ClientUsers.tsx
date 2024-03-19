"use client";

import DataTable from "@/components/DataTable";
import DeleteModel from "@/components/models/DeleteModel";
import useUsersConfig from "@/hooks/config/useUsersConfig";
import { FC } from "react";
import { deleteUser } from "../api/users";
import { IUser } from "@/types/user.type";

interface ClientUsersProps {
  users: IUser[];
}

const ClientUsers: FC<ClientUsersProps> = ({ users }) => {
  const [column] = useUsersConfig();

  return (
    <>
      <DataTable columns={column} data={users} />
      <DeleteModel deleteFunction={deleteUser} />
    </>
  );
};

export default ClientUsers;
