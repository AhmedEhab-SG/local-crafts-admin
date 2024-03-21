"use client";

import ButtonStyled from "@/components/shared/ButtonStyled";
import InputReactFrom from "@/components/shared/InputReactFrom";
import TotalContainer from "@/components/shared/TotalContainer";
import { use, useCallback, useState } from "react";
import { FieldErrorsImpl, FieldValues, useForm } from "react-hook-form";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import { createTargetCategory } from "@/app/api/category";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { MdAdd } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

const AddClient = () => {
  const [imgUrl, setImgUrl] = useState<any>();
  const [imgUrlError, setImgUrlError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      target: "",
      name: "",
      description: "",
    },
  });

  const fieldErrors = errors as FieldErrorsImpl;

  const onSubmitHandler = useCallback(
    async (data: FieldValues) => {
      setImgUrlError(false);

      if (!imgUrl?.info?.secure_url) return setImgUrlError(true);

      try {
        const photo = imgUrl?.info?.secure_url;
        const { target, name, description } = data;
        const body = { name, description, photo };
        setLoading(true);

        await createTargetCategory(target, body, user?.token);

        toast.success("Category added successfully");
        setLoading(false);
        router.refresh();
        router.replace("/categories");
      } catch (err) {
        setLoading(false);
        toast.error("Failed to add category");
      }
    },
    [imgUrl, user?.token, router]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex w-full flex-col-reverse lg:flex-row justify-center gap-10"
    >
      <TotalContainer className="w-full">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <p className="w-full text-center text-lg">Product or Service</p>
            <div className="flex mt-5 text-center items-center justify-evenly">
              <div>
                <label>Product</label>
                <InputReactFrom
                  className="mt-2 text-center"
                  id="target"
                  bg
                  bgDark
                  type="radio"
                  value="products"
                  borders
                  register={register}
                  errors={fieldErrors}
                  required={{
                    required: {
                      value: true,
                      message: "At least one target is required.",
                    },
                  }}
                />
              </div>
              <div>
                <label>Service</label>
                <InputReactFrom
                  className="mt-2   text-center"
                  id="target"
                  bg
                  bgDark
                  type="radio"
                  value="services"
                  borders
                  register={register}
                  errors={fieldErrors}
                  required={{
                    required: {
                      value: true,
                      message: "At least one target is required.",
                    },
                  }}
                />
              </div>
            </div>
          </div>
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
                  value: /^[a-zA-Z0-9\u0600-\u06FF]+$/,
                  message:
                    "Name must contain only alphabets, arabic and  numbers.",
                },
              }}
            />
          </div>

          <div>
            <p>Description</p>
            <InputReactFrom
              input="textarea"
              className="mt-2"
              id="description"
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
                  value: 10,
                  message: "Description must be at least 10 characters long.",
                },
              }}
            />
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <ButtonStyled
            type="submit"
            title={loading ? "Adding..." : "Add Category"}
            success
            disabled={loading}
            SvgIcon={
              loading ? (
                <ClipLoader size={23} color="#fff" />
              ) : (
                <MdAdd size={23} />
              )
            }
          />
          <ButtonStyled
            title={loading ? "Adding..." : "Go Back"}
            elemType="link"
            href="/categories"
            primary
            transparent
            className="text-center"
            disabled={loading}
            SvgIcon={
              loading ? (
                <ClipLoader size={23} color="#fff" />
              ) : (
                <RiArrowGoBackFill size={23} />
              )
            }
          />
        </div>
      </TotalContainer>
      <TotalContainer className="flex w-full gap-5 flex-col items-center justify-center">
        <CldUploadWidget
          onSuccess={(result) => setImgUrl(() => result)}
          uploadPreset="admin-panel-local-craft"
          options={{
            maxFiles: 1,
          }}
        >
          {({ open }) => (
            <Image
              onClick={() => open()}
              src={`${
                imgUrl?.info?.secure_url || "/images/common/uploadCloud.webp"
              }`}
              alt="client image"
              width={500}
              height={300}
              className={`cursor-pointer object-cover  ${
                !imgUrl?.info?.secure_url && "opacity-70"
              }`}
            />
          )}
        </CldUploadWidget>
        {imgUrlError && (
          <h3 className="text-danger text-lg font-semibold">
            Image is required
          </h3>
        )}
      </TotalContainer>
    </form>
  );
};

export default AddClient;
