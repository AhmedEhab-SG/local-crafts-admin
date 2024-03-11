"use client";

import LoginForm from "./LoginForm";
import LoginInfo from "./LoginInfo";

const LoginModel = () => {
  return (
    <section
      className="
          flex
          flex-wrap
          items-center
          rounded-sm
          border
          border-stroke
          bg-white
          shadow-default
          dark:border-strokedark
          dark:bg-boxdark"
    >
      <LoginInfo />
      <LoginForm />
    </section>
  );
};

export default LoginModel;
