"use client";

import { User } from "@/types/user.type";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

interface ProfileProps {
  profileHandler: () => void;
  user?: User;
}

const Profile: React.FC<ProfileProps> = ({ profileHandler, user }) => {
  const safeUserImg = ({ dark }: { dark: boolean }) => {
    if (user?.photo.includes("https://")) return user.photo;
    return dark ? "/images/common/dark-user.png" : "/images/common/user.png";
  };
  return (
    <button
      className="
        flex
        items-center
        justify-center
        gap-3"
      onClick={profileHandler}
    >
      <div
        className="
          hidden
          text-right
          lg:block"
      >
        <p
          className="
            text-sm 
            font-medium
            text-black
            dark:text-white"
        >
          {user?.name || "Login"}
        </p>
        {user?.role && (
          <p className="text-xs dark:text-bodydark2">
            {user?.role.toUpperCase()}
          </p>
        )}
      </div>
      <div
        className="
          w-12
          h-12
          rounded-full"
      >
        <Image
          className="hidden dark:block"
          width={48}
          height={48}
          src={safeUserImg({ dark: true })}
          alt="user"
        />
        <Image
          className="block dark:hidden"
          width={48}
          height={48}
          src={safeUserImg({ dark: false })}
          alt="user"
        />
      </div>
      <div className="text-lg">
        <MdKeyboardArrowDown />
      </div>
    </button>
  );
};

export default Profile;
