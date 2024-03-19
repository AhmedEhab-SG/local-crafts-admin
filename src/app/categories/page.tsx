import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getTargetCategories } from "../api/category";
import Error from "../error";
import PageContainer from "@/components/shared/PageContainer";
import ClientCategories from "./ClientCategories";
import PageHeader from "@/components/shared/PageHeader";

const Categories = async () => {
  try {
    const session = await getServerSession(authOptions);

    const token = session?.user.token;

    const resProd = await getTargetCategories("products", token);
    const resServ = await getTargetCategories("services", token);

    const servCategories = resServ.data;
    const prodCategories = resProd.data;

    return (
      <PageContainer>
        <PageHeader
          title="Categories"
          route={[
            { name: "Dashboard", path: "/" },
            { name: "Categories", path: "/categories" },
          ]}
        />
        <ClientCategories
          servCategories={servCategories}
          prodCategories={prodCategories}
        />
      </PageContainer>
    );
  } catch (err) {
    return <Error />;
  }
};

export default Categories;
export const dynamic = "force-dynamic";
