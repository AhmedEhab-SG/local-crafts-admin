import { getServiceById } from "@/app/api/services";
import ClientServicesDetail from "./ClientServicesDetail";
import Error from "@/app/error";
interface IParams {
  serviceId?: string;
}

const ServiceId = async ({ params }: { params: IParams }) => {
  try {
    const service = await getServiceById(params.serviceId);
    // const session = await getServerSession(authOptions);

    if (!service.data) {
      return <div>Services not found</div>;
    }

    return <ClientServicesDetail service={service.data} />;
  } catch (e) {
    return <Error />;
  }
};

export default ServiceId;
