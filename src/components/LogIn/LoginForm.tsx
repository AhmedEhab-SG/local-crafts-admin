"use client";

import InputForm from "./InputForm";

const LoginForm = () => {
  return (
    <div
      className="
    w-full
    border-stroke
    dark:border-strokedark
    xl:w-1/2
    xl:border-l-2
    p-4
    sm:p-12.5
    xl:p-17.5"
    >
      <p
        className="
        mb-1.5
        font-medium
      text-body
      dark:text-bodydark"
      >
        Welcome Admin
      </p>
      <h2
        className="
        mb-9
        text-2xl
        font-bold
        text-black
        dark:text-white
        sm:text-title-xl2"
      >
        Sign In To The Pannel
      </h2>
      <InputForm />
    </div>
  );
};

export default LoginForm;
