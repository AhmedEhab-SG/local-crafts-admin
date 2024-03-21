"use client";

import ButtonStyled from "@/components/shared/ButtonStyled";
import InputReactFrom from "@/components/shared/InputReactFrom";
import TotalContainer from "@/components/shared/TotalContainer";
import { FC, use, useCallback, useState } from "react";
import { FieldErrorsImpl, FieldValues, useForm } from "react-hook-form";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import { createTargetCategory, updateTargetCatOrSub } from "@/app/api/category";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ICategory } from "@/types/category.type";
import { ClipLoader } from "react-spinners";
import { MdUpdate } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

interface EditClientProps {
  category: ICategory;
  target: "products" | "services";
}

const EditClient: FC<EditClientProps> = ({ category, target }) => {
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
      target,
      name: category?.name,
      description: category?.description,
    },
  });

  const fieldErrors = errors as FieldErrorsImpl;

  const onSubmitHandler = useCallback(
    async (data: FieldValues) => {
      setImgUrlError(false);

      if (!imgUrl?.info?.secure_url && !category.photo)
        return setImgUrlError(true);

      try {
        const photo = imgUrl?.info?.secure_url;
        const { target, name, description } = data;
        const body = { name, description, photo };
        setLoading(true);

        await updateTargetCatOrSub(target, body, category._id, user?.token);

        toast.success("Category edit successfully");
        setLoading(false);
        router.refresh();
        router.replace("/categories");
      } catch (err) {
        console.error(err);
        setLoading(false);
        toast.error("Failed to edit category");
      }
    },
    [imgUrl, user?.token, router, category]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex w-full flex-col-reverse lg:flex-row justify-center gap-10"
    >
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
            title={loading ? "Editing..." : "Edit Category"}
            warning
            disabled={loading}
            SvgIcon={
              loading ? (
                <ClipLoader size={23} color="#fff" />
              ) : (
                <MdUpdate size={23} />
              )
            }
          />
          <ButtonStyled
            title={loading ? "Editing..." : "Go Back"}
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
                imgUrl?.info?.secure_url ||
                category.photo ||
                "/images/common/uploadCloud.webp"
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

export default EditClient;
