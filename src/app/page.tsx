import { getServerSession } from "next-auth";
import HomeClient from "./HomeClient";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getPagenateProducts } from "@/app/api/products";
import { getPagenateServices } from "@/app/api/services";
import { getUsersPaginate } from "@/app/api/users";
import { getAllOrders } from "@/app/api/orders";
import ClientOnly from "@/components/shared/ClientOnly";
import Error from "./error";

export default async function Home() {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.user?.token;
    const products = await getPagenateProducts({ page: 1, limit: 0 });
    const services = await getPagenateServices({ page: 1, limit: 0 });
    const orders = await getAllOrders(token);
    const users = await getUsersPaginate(token, { page: 1, limit: 0 });

    const data = {
      products: products.data,
      services: services.data,
      users: users.data,
      orders: orders.data,
      user: session?.user,
      token,
    };
    return (
      <ClientOnly>
        <HomeClient data={data} />
      </ClientOnly>
    );
  } catch (e) {
    return <Error />;
  }
}
