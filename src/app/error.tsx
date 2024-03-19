"use client";

import InternalErroSvg from "@/assets/svg/InternalError.svg";
import ClientOnly from "@/components/shared/ClientOnly";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import { FC, useEffect } from "react";
interface ErrorStateProps {
  error?: Error;
}

const Error: FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {}, [error]);

  return (
    <ClientOnly>
      <PageContainer>
        <PageHeader
          title="Internal Error"
          route={[{ name: "Dashboard", path: "/" }, { name: "Internal Error" }]}
        />
        <div
          className="
    rounded-sm
    border
    border-stroke
    bg-white
    px-5
    py-10
    shadow-default
    dark:border-strokedark
    dark:bg-boxdark
    sm:py-20"
        >
          <div
            className="
      mx-auto
      max-w-[500px]"
          >
            <InternalErroSvg />
            <div className="mt-7.5 text-center">
              <h2
                className="
            mb-3 
            text-2xl
            font-bold
            text-black
            dark:text-white"
              >
                Ops, something went wrong
              </h2>
              <p className="font-medium">
                If this error persistent, please try to sgin out and sign in
                again or contact support.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </ClientOnly>
  );
};

export default Error;
