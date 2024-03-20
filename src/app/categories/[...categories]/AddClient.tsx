"use client";

import InputReactFrom from "@/components/shared/InputReactFrom";
import InputStyled from "@/components/shared/InputStyled";
import TotalContainer from "@/components/shared/TotalContainer";
import { FieldErrorsImpl, FieldValues, useForm } from "react-hook-form";

const AddClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const fieldErrors = errors as FieldErrorsImpl;

  return (
    <form className="flex w-full flex-col lg:flex-row justify-center gap-10">
      <TotalContainer className="w-full">
        <div className="flex flex-col gap-3">
          <div>
            <p>Name</p>
            <InputReactFrom
              className="mt-2"
              id="name"
              bg
              bgDark
              borders
              label="Type name here"
              register={register}
              errors={fieldErrors}
              required={{
                required: {
                  value: true,
                  message: "Name is required.",
                },
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "Name must contain only alphabets and numbers.",
                },
              }}
            />
          </div>

          <div>
            <p>Description</p>
            <InputReactFrom
              input="textarea"
              className="mt-2"
              id="type"
              bg
              bgDark
              borders
              label="Type description here"
              register={register}
              errors={fieldErrors}
              required={{
                required: {
                  value: true,
                  message: "Description is required.",
                },
                minLength: {
                  value: 3,
                  message: "Description must be at least 3 characters long.",
                },
              }}
            />
          </div>
        </div>
      </TotalContainer>
      <TotalContainer className="w-full">hi</TotalContainer>
    </form>
  );
};

export default AddClient;
