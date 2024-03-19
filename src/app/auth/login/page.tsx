import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginSection from "@/components/LogIn";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

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
export const dynamic = "force-dynamic";
