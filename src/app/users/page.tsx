import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import TotalContainer from "@/components/shared/TotalContainer";
import { IUser } from "@/types/user.type";
import { getUsersPaginate } from "@/app/api/users";
import React from "react";
import ClientUsers from "./ClientUsers";
import Error from "../error";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const Users = async () => {
  try {
    const session = await getServerSession(authOptions);

    const res = await getUsersPaginate(session?.user.token, {
      page: 1,
      limit: 0,
    });
    const users: IUser[] = res.data.data;

    if (!users) return <div>Users not found</div>;
    
    return (
      <PageContainer>
        <PageHeader
          title="Users"
          route={[
            { name: "Dashboard", path: "/" },
            { name: "Users", path: "/users" },
          ]}
        />
        <TotalContainer>
          <ClientUsers users={users} />
        </TotalContainer>
      </PageContainer>
    );
  } catch (e) {
    return <Error />;
  }
};

export default Users;
export const dynamic = "force-dynamic";
