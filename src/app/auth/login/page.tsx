import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginSection from "@/components/LogIn";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import ClientOnly from "@/components/shared/ClientOnly";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user._id) return redirect("/");

  return (
    <PageContainer>
      <PageHeader
        title="Sign In"
        route={[
          { name: "DashBoard", path: "/" },
          { name: "Sign In", path: "/login" },
        ]}
      />
      <LoginSection />
    </PageContainer>
  );
};

export default Login;
