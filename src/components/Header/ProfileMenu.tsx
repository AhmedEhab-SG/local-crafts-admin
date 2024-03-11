"use client";

import ContactsSvg from "@/assets/svg/Contacts.svg";
import LogoutSvg from "@/assets/svg/Logout.svg";
import ProfileSvg from "@/assets/svg/Profile.svg";
import SettingsSvg from "@/assets/svg/Settings.svg";
import { User } from "@/types/user.type";

import React from "react";
import BtnHeader from "../shared/BtnHeader";
import LoginSvg from "@/assets/svg/Login.svg";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ProfileMenuProps {
  openProfile: boolean;
  profileHandler: () => void;
  user?: User;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  profileHandler,
  openProfile,
  user,
}) => {
  const router = useRouter();

  const userOptionsArr = [
    {
      title: "My Profile",
      Logo: <ProfileSvg />,
    },
    {
      title: "My Contacts",
      Logo: <ContactsSvg />,
    },
    {
      title: "Account Settings",
      Logo: <SettingsSvg />,
    },
  ];

  const logoutHandler = () => {
    signOut();
    profileHandler();
    router.push("/");
  };
  const loginhandler = () => {
    profileHandler();
    router.push("/login");
  };

  const userOptions = userOptionsArr.map(({ title, Logo }, index) => (
    <li
      key={index}
      className="
        flex
        items-center
        gap-3.5
        text-sm
        font-medium
        duration-300
        ease-in-out
        hover:text-primary
        lg:text-md"
      onClick={profileHandler}
    >
      {Logo}
      <span>{title}</span>
    </li>
  ));

  return (
    <div
      className={`
        absolute
        right-5
        top-15
        mt-4
        flex
        w-62.5
        flex-col
        rounded-sm
        border
        border-stroke
        bg-white
        shadow-default
        dark:border-strokedark
        dark:bg-boxdark
        ${openProfile ? "block" : "hidden"}`}
    >
      {user?._id && (
        <ul
          className="
          flex
          flex-col
          gap-5
          border-b
          border-stroke
          px-6
          py-7.5
          dark:border-strokedark"
        >
          {userOptions}
        </ul>
      )}

      {user?._id ? (
        <BtnHeader
          title="Logout"
          SvgLogo={<LogoutSvg />}
          onClick={logoutHandler}
        />
      ) : (
        <BtnHeader
          title="Login"
          SvgLogo={<LoginSvg />}
          onClick={loginhandler}
        />
      )}
    </div>
  );
};

export default ProfileMenu;
