import { getServerSession } from "next-auth";
import HomeClient from "./HomeClient";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getPagenateProducts } from "@/utils/api/products";
import { getPagenateServices } from "@/utils/api/services";
import { getAllUsers } from "@/utils/api/users";
import { getAllOrders } from "@/utils/api/orders";
import ClientOnly from "@/components/shared/ClientOnly";
import Error from "./error";

export default async function Home() {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.user?.token;
    const products = await getPagenateProducts({ page: 1, limit: 0 });
    const services = await getPagenateServices({
      page: 1,
      limit: 0,
      type: "service",
    });
    const orders = await getAllOrders(token);
    const users = await getAllUsers(token);

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
