"use client";

import { IUser } from "@/types/user.type";
import { safeImgDisplay } from "@/utils/functions";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

interface ProfileProps {
  profileHandler: () => void;
  user?: IUser;
}

const Profile: React.FC<ProfileProps> = ({ profileHandler, user }) => {
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
          src={safeImgDisplay({
            photoUrl: user?.photo,
            dark: true,
            darkImg: "/images/common/dark-user.png",
            lightImg: "/images/common/user.png",
          })}
          alt="user"
        />
        <Image
          className="block dark:hidden"
          width={48}
          height={48}
          src={safeImgDisplay({
            photoUrl: user?.photo,
            dark: false,
            darkImg: "/images/common/dark-user.png",
            lightImg: "/images/common/user.png",
          })}
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
