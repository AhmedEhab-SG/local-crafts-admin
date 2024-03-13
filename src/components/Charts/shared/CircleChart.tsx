"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import { ApexOptions } from "apexcharts";

interface CircleChartProps {
  state: { series: any[] };
  labels: string[];
  colors: string[];
}

const CircleChart: FC<CircleChartProps> = ({ state, labels, colors }) => {
  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    colors,
    labels,
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div
      id="chartThree"
      className="mx-auto flex justify-center stroke-body dark:stroke-bodydark"
    >
      <Chart
        options={options}
        series={state.series}
        type="donut"
        height={350}
        width={"100%"}
      />
    </div>
  );
};

export default CircleChart;
