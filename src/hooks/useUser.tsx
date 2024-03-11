import { useSession } from "next-auth/react";

const useUser = () => {
  const { data: session } = useSession();

  return {
    isLoading: !session,
    user: session?.user,
    expires: session?.expires,
  };
};

export default useUser;
