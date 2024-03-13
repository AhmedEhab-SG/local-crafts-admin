"use client";

import ChartContainer from "./shared/ChartContainer";
import ChartHeader from "./shared/ChartHeader";
import ChartFooter from "./shared/ChartFooter";
import TableChart from "./shared/TableChart";
import { FC } from "react";
import { getCreatedCountForWeek } from "@/utils/functions";

interface BarChartProps {
  data?: any;
}

const BarChart: FC<BarChartProps> = ({ data }) => {
  const series = data.map(({ name, arr }: { name: string; arr: any[] }) => ({
    name: name,
    data: getCreatedCountForWeek(arr),
  }));

  return (
    <ChartContainer>
      <ChartHeader
        title={series.map(({ name }: { name: string }) => name)}
        sub={"Weekly"}
      />
      <TableChart state={{ series }} />
      <ChartFooter />
    </ChartContainer>
  );
};

export default BarChart;
