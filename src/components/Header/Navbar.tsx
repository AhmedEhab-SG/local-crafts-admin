"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import ModeSwitcher from "./ModeSwitcher";
import ToggleAside from "./ToggleAside";
import Profile from "./Profile";
import ProfileMenu from "./ProfileMenu";
import HeaderUiIcons from "./HeaderUiIcons";
import BellSvg from "@/assets/svg/Bell.svg";
import useUser from "@/hooks/useUser";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const { user, isLoading } = useUser();

  const profileHandler = () => {
    setOpenProfile((prev) => !prev);
  };

  return (
    <nav
      className="
        relative
        flex
        flex-grow
        items-center
        justify-between
        px-4
        py-4
        shadow-2
        md:px-6
        2xl:px-11"
    >
      <ToggleAside />
      <SearchBar />
      <div
        className="
          flex 
          items-center 
          justify-center
          gap-4"
      >
        <ModeSwitcher />

        <HeaderUiIcons title={"Notification"} SvgIcon={<BellSvg />} />

        <Profile user={user} profileHandler={profileHandler} />
      </div>
      <ProfileMenu
        user={user}
        openProfile={openProfile}
        profileHandler={profileHandler}
      />
    </nav>
  );
};

export default Navbar;
