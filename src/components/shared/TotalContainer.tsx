"use client";

import { ReactNode } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface TotalContainerProps {
  children?: ReactNode;
  className?: string;
}
const TotalContainer: React.FC<TotalContainerProps> = ({
  children,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(25px)",
        transition: "transform 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)0.8s, opacity 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)0.8s",
      }}
      className={`
      rounded-sm
      border 
      border-stroke 
      bg-white 
      px-7.5 
      py-6 
      shadow-default 
      dark:border-strokedark 
      dark:bg-boxdark ${className}`}
    >
      {children}
    </div>
  );
};

export default TotalContainer;
