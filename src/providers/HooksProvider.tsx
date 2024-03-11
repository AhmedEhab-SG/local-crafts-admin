"use client";

import { ReactNode } from "react";
import useColorMode from "../hooks/useColorMode";

interface HooksProviderProps {
  children: ReactNode;
}

const HooksProvider: React.FC<HooksProviderProps> = ({ children }) => {
  const [currentMode] = useColorMode();

  return <>{children}</>;
};

export default HooksProvider;
