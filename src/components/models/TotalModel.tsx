"use client";

import { ReactNode } from "react";
import TotalContainer from "../shared/TotalContainer";
import IconContainer from "../shared/IconContainer";
import TotalDetails from "../shared/TotalDetails";

interface TotalModelProps {
  SvgIcon: ReactNode;
  number: number;
  title: string;
}

const TotalModel: React.FC<TotalModelProps> = ({ SvgIcon, number, title }) => {
  return (
    <TotalContainer>
      <IconContainer SvgIcon={SvgIcon} />
      <TotalDetails title={title} number={number} />
    </TotalContainer>
  );
};

export default TotalModel;
