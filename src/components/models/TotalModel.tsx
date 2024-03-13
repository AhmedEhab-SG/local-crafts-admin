"use client";

import { ReactNode } from "react";
import TotalContainer from "../shared/TotalContainer";
import IconContainer from "../shared/IconContainer";
import TotalDetails from "../shared/TotalDetails";
import { calculateRelativeChange } from "@/utils/functions";

interface TotalModelProps {
  SvgIcon: ReactNode;
  number: number;
  title: string;
  arr: any[];
}

const TotalModel: React.FC<TotalModelProps> = ({
  SvgIcon,
  number,
  title,
  arr,
}) => {
  const relatieChange = calculateRelativeChange(arr);

  return (
    <TotalContainer>
      <IconContainer SvgIcon={SvgIcon} />
      <TotalDetails
        title={title}
        number={number}
        relatieChange={relatieChange}
      />
    </TotalContainer>
  );
};

export default TotalModel;
