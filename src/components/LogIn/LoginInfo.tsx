"use client";

import LoginMobileSvg from "@/assets/svg/LoginMobile.svg";
import AdminPanelLogo from "../shared/AdminPanelLogo";

const LoginInfo = () => {
  return (
    <div
      className="
    hidden
    w-full
    xl:block
    xl:w-1/2"
    >
      <div
        className="
        px-20 
        py-17.5
        text-center
        flex
        flex-col
        items-center"
      >
        <AdminPanelLogo styles="dark:text-white mb-5.5" title="Local Crafts Admin" />
        <p
          className="
        2xl:px-20 
      text-body   
      dark:text-bodydark"
        >
          Admin pannel made to control and manage your local crafts website and
          its data base You can manage your products, orders, customers and
          more.
        </p>
        <div className="mt-15">
          <LoginMobileSvg />
        </div>
      </div>
    </div>
  );
};

export default LoginInfo;
