"use client";

import { use, useEffect, useState } from "react";
import InputReactForm from "../shared/InputReactFrom";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FieldErrorsImpl,
} from "react-hook-form";
import { signIn } from "next-auth/react";
import ButtonStyled from "../shared/ButtonStyled";
import { ClipLoader } from "react-spinners";
import LoginSvg from "@/assets/svg/Login.svg";

const InputForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (redirect) {
      window.location.href = "/";
      setRedirect(() => false);
    }
  }, [redirect]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!res?.ok) {
        setIsLoading(false);
        setError(() => "invaild credentials");
        return;
      }

      setRedirect(() => true);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="
            mb-2.5
            block
            font-medium
            text-black
            dark:text-white"
        >
          Email
        </label>
        <InputReactForm
          id="email"
          vaild="email"
          bgDark
          bg
          borders
          label="Email"
          disabled={isLoading}
          type="text"
          register={register}
          errors={errors as FieldErrorsImpl}
          required={{
            required: {
              value: true,
              message: "Email is required.",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Email must contain the @ symbol and a domain name.",
            },
          }}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="
            mb-2.5
            block
            font-medium
            text-black
            dark:text-white"
        >
          Password
        </label>
        <InputReactForm
          disabled={isLoading}
          bg
          required={{
            required: {
              value: true,
              message: "Password is required.",
            },

            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.",
            },
          }}
          register={register}
          errors={errors as FieldErrorsImpl}
          id="password"
          borders
          bgDark
          label="Password Must Be Strong"
          type="password"
        />
      </div>

      <ButtonStyled
        primary
        className="w-full mt-4"
        title={isLoading ? "Checking..." : "Sign In"}
        type="submit"
        SvgIcon={
          isLoading ? <ClipLoader size={20} color="#fff" /> : <LoginSvg />
        }
        disabled={isLoading}
      />
      {error && (
        <p className="text-rose-500 w-full text-center mt-5 font-semibold p-2">
          {error}
        </p>
      )}
    </form>
  );
};

export default InputForm;
