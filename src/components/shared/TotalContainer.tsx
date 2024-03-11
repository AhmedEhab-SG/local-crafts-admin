"use client";

import { ReactNode } from "react";

interface TotalContainerProps {
  children?: ReactNode;
}
const TotalContainer: React.FC<TotalContainerProps> = ({ children }) => {
  return (
    <div
      className="
      rounded-sm
      border 
      border-stroke 
      bg-white 
      px-7.5 
      py-6 
      shadow-default 
      dark:border-strokedark 
      dark:bg-boxdark"
    >
      {children}
    </div>
  );
};

export default TotalContainer;
