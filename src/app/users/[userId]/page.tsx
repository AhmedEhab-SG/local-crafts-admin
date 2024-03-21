import { getusersById } from "@/app/api/users";
import Error from "@/app/error";
import NotFound from "@/app/not-found";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { IUser } from "@/types/user.type";
import { pascalCase } from "@/utils/functions";
import { getServerSession } from "next-auth";
import { FC } from "react";
import UserDetailsClient from "./UserDetailsClient";

interface UserDetailsProps {
  params: { userId: string };
}
const UserDetails: FC<UserDetailsProps> = async ({ params: { userId } }) => {
  try {
    const session = await getServerSession(authOptions);

    const token = session?.user.token;

    const res = await getusersById(userId, token);
    const user: IUser = res.data;

    return (
      <PageContainer>
        <PageHeader
          title="User Detail"
          route={[
            { name: "Dashboard", path: "/" },
            { name: "Users", path: "/users" },
            { name: `${pascalCase(user.name)}`, path: `/users/${userId}` },
          ]}
        />
        <UserDetailsClient user={user} />
      </PageContainer>
    );
  } catch (e) {
    return <Error />;
  }
};

export default UserDetails;
