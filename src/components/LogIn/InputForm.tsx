"use client";

import { ChangeEvent, FormEvent, use, useState } from "react";
import InputReactForm from "../shared/InputReactFrom";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FieldErrorsImpl,
} from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import login from "@/utils/auth";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const InputForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

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
        return setError(() => "invaild credentials");
      }

      setIsLoading(false);
      router.push("/");
    } catch (err) {
      console.log(err);
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
          required={{
            required: {
              value: true,
              message: "Password is required.",
            },

            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
            // pattern: {
            //   value:
            //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            //   message:
            //     "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.",
            // },
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
      <button
        disabled={isLoading}
        className="
          w-full
          rounded-lg
          border
          border-primary
          bg-primary
          p-4
          mt-4
          text-white
          transition
          hover:bg-opacity-90
          "
      >
        Sign In
      </button>
      {error && (
        <p className="text-rose-500 w-full text-center mt-5 font-semibold p-2">
          {error}
        </p>
      )}
    </form>
  );
};

export default InputForm;
