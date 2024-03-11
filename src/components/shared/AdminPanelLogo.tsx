"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface AdminPanelLogoProps {
  title: string;
  styles?: string;
}

const AdminPanelLogo: FC<AdminPanelLogoProps> = ({ title, styles }) => {
  return (
    <Link
      className={` 
        flex 
        items-center 
        justify-start
        gap-3
        ${styles}`}
      href={"/"}
    >
      <Image
        width={30}
        height={30}
        src={"/images/logo/logo-icon.svg"}
        alt="logo"
        priority
      />
      <p
        className="
            font-bold 
            text-xl"
      >
        {title}
      </p>
    </Link>
  );
};

export default AdminPanelLogo;
