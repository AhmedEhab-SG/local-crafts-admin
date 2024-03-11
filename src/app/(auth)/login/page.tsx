"use client";
import LoginSection from "@/components/LogIn";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();

  const { user } = useUser();

  if (user?._id) router.push("/");

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
