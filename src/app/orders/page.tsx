import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Error from "../error";
import { getAllOrders } from "../api/orders";
import { IOrder } from "@/types/order.type";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import TotalContainer from "@/components/shared/TotalContainer";
import ClientOrders from "./ClientOrders";

const Orders = async () => {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.user?.token;

    const res = await getAllOrders(token);

    const orders: IOrder[] = res.data;

    return (
      <PageContainer>
        <PageHeader
          title="Orders"
          route={[
            { name: "Dashboard", path: "/" },
            { name: "Orders", path: "/orders" },
          ]}
        />

        <ClientOrders orders={orders} />
      </PageContainer>
    );
  } catch (e) {
    return <Error />;
  }
};

export default Orders;
export const dynamic = "force-dynamic";
