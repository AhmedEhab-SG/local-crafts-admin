"use client";

import TotalContainer from "@/components/shared/TotalContainer";
import { IUser } from "@/types/user.type";
import { FC } from "react";
import Image from "next/image";
import { pascalCase, safeImgDisplay } from "@/utils/functions";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { Phone } from "lucide-react";

interface UserDetailsClientProps {
  user: IUser;
}

const UserDetailsClient: FC<UserDetailsClientProps> = ({ user }) => {
  return (
    <TotalContainer className="flex justify-center items-center flex-col text-center ">
      <Image
        src={safeImgDisplay({ photoUrl: user.photo })}
        alt="user"
        width={150}
        height={150}
        className="rounded-full "
      />
      <div className="mt-10">
        <h2
          className="
          text-black
          dark:text-bodydark1
          text-2xl
          font-semibold"
        >
          {pascalCase(user.name)}
        </h2>
        {user.job && <h3>{user.job}</h3>}
        <h3
          className="
            text-lg
            font-semibold
            mt-1"
        >
          {user.role.toUpperCase()}
        </h3>
        <div className="flex gap-10 justify-center items-center">
          <h3
            className="
            flex
            justify-center 
            gap-2
            items-center
            mt-1"
          >
            <MdEmail size={20} />
            {user.email}
          </h3>
          <h3
            className="
            flex
            justify-center 
            gap-2
            items-center
            mt-1"
          >
            <Phone size={20} />
            {user.phone}
          </h3>
        </div>
        <p className="mt-10 text-black flex items-center dark:text-bodydark1 gap-2 justify-center font-semibold">
          <FaRegAddressCard size={20} />
          ADDRESS
        </p>
        <div
          className="flex
          text-white 
            p-2
            justify-center
          
            gap-2 mt-1"
        >
          <p
            className="
              font-semibold"
          >
            Governorate:
            <span className="mx-2 font-thin">{user.address.gov}</span>
          </p>
          <p
            className="
            font-semibold"
          >
            City:
            <span className="ml-2 font-thin">{user.address.city}</span>
          </p>
        </div>
        <div className="flex text-center  flex-col gap-3 justify-center mt-10">
          <p className="text-xl font-semibold ">Description</p>
          <p className="text-bodydark max-w-[60rem] bg-form-strokedark p-2 max-w ">
            {user.description || "there is no description"}
          </p>
        </div>
      </div>
    </TotalContainer>
  );
};

export default UserDetailsClient;
