"use client";

import { FC, ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <main
      className="
        mx-auto
        max-w-screen-2xl
        w-full
        p-4
        md:p-6
        2xl:p-10"
    >
      {children}
    </main>
  );
};

export default PageContainer;
