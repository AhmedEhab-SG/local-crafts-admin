import Error from "@/app/error";
import NotFound from "@/app/not-found";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import { pascalCase } from "@/utils/functions";
import { FC } from "react";
import EditClient from "./EditClient";
import { getTargetCategories } from "@/app/api/category";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ICategory } from "@/types/category.type";

interface IParams {
  params: { categories: string[] };
  searchParams: {
    target: "products" | "services";
    id: string;
  };
}

const ActionCategory: FC<IParams> = async ({ params, searchParams }) => {
  try {
    const actions = ["edit", "add"];
    if (!actions.includes(params?.categories[0])) return <NotFound />;

    if (
      params?.categories[0] === "edit" &&
      searchParams?.id &&
      searchParams?.target &&
      !params?.categories[1]
    ) {
      const session = await getServerSession(authOptions);

      const res = await getTargetCategories(
        searchParams?.target,
        session?.user?.token
      );

      const allCategories = res.data;

      const category = allCategories.find(
        ({ _id }: ICategory) => _id === searchParams?.id
      );

      if (!category) return <NotFound />;

      return (
        <PageContainer>
          <PageHeader
            title={`Edit ${pascalCase(searchParams?.target)} Category`}
            route={[
              { name: "Dashboard", path: "/" },
              { name: "Categories", path: "/categories" },
              {
                name: "Edit Category",
                path: `/categories/edit?target=${searchParams?.target}&id=${searchParams?.id}`,
              },
            ]}
          />
          <EditClient category={category} />
        </PageContainer>
      );
    }

    if (params?.categories[0] === "add" && !params?.categories[1]) {
      return (
        <PageContainer>
          <h1>add</h1>
        </PageContainer>
      );
    }

    return <NotFound />;
  } catch (e) {
    return <Error />;
  }
};

export default ActionCategory;
