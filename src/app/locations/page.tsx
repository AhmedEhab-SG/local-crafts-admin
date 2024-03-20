import Error from "../error";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import { getTargetLocations } from "../api/locations";
import { IGovernorate } from "@/types/locations.type";
import ClientLocations from "./ClientLocations";

const Locations = async () => {
  try {
    const res = await getTargetLocations("governorates");

    const governorates: IGovernorate[] = res.data;

    return (
      <PageContainer>
        <PageHeader
          title="Locations"
          route={[
            { name: "Dashboard", path: "/" },
            { name: "Locations", path: "/locations" },
          ]}
        />
        <ClientLocations governorates={governorates} />
      </PageContainer>
    );
  } catch (err) {

    return <Error />;
  }
};

export default Locations;
export const dynamic = "force-dynamic";
