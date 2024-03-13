import NotFoundSvg from "@/assets/svg/NotFound.svg";
import ButtonStyled from "@/components/shared/ButtonStyled";
import PageContainer from "@/components/shared/PageContainer";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import ClientOnly from "@/components/shared/ClientOnly";

const NotFound = () => {
  return (
    <ClientOnly>
      <PageContainer>
        <PageHeader
          title="Not Found"
          route={[{ name: "Dashboard", path: "/" }, { name: "Not Found" }]}
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
          max-w-[410px]"
          >
            <NotFoundSvg />
            <div className="mt-7.5 text-center">
              <h2
                className="
                mb-3 
                text-2xl
                font-bold
                text-black
                dark:text-white"
              >
                Sorry, the page can&apos;t be found
              </h2>
              <p className="font-medium">
                The page you were looking for appears to have been moved,
                deleted or does not exist.
              </p>
              <ButtonStyled
                title="Go Back Home"
                elemType="href"
                href="/"
                target="_self"
                SvgIcon={<BiSolidLeftArrow />}
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </ClientOnly>
  );
};

export default NotFound;
