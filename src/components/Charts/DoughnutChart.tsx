"use client";

import ChartContainer from "./shared/ChartContainer";
import ChartHeader from "./shared/ChartHeader";
import ChartFooter from "./shared/ChartFooter";
import CircleChart from "./shared/CircleChart";
import { FC } from "react";
import { calculatePercentages, pascalCase } from "@/utils/functions";

interface DoughnutChartProps {
  data?: any;
}

const DoughnutChart: FC<DoughnutChartProps> = ({ data }) => {
  const totals = data.map((info: any) => info.arr.length);
  const names = data.map((info: any) => info.name);
  const colors = data.map((info: any) => info.color);

  const series = calculatePercentages(totals);

  const infos = { totals, names, colors };

  const arr = Object.keys(infos).map((key, i) => {
    return {
      name: infos.names[i],
      color: infos.colors[i],
      total: calculatePercentages(infos.totals)[i],
    };
  });

  return (
    <ChartContainer>
      <ChartHeader title={names}  sub="OverAll"/>
      <CircleChart
        state={{ series }}
        colors={arr.map(({ color }) => color)}
        labels={arr.map(({ name }) => name)}
      />

      <ChartFooter
        info={data.map(({ name, color }: any, i: number) => {
          return {
            name: pascalCase(name),
            color,
            total: `${series[i]}%`,
          };
        })}
      />
    </ChartContainer>
  );
};

export default DoughnutChart;
