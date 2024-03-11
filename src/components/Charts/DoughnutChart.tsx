"use client";

import ChartContainer from "./shared/ChartContainer";
import ChartHeader from "./shared/ChartHeader";
import ChartFooter from "./shared/ChartFooter";
import CircleChart from "./shared/CircleChart";
import { useState } from "react";

const DoughnutChart = () => {
  const [state, setState] = useState({
    series: [65, 34],
  });

  return (
    <ChartContainer>
      <ChartHeader title="Service & Products" />
      <CircleChart state={state} />

      <ChartFooter
        info={[
          { title: "Products", color: "#3C50E0", total: "65%" },
          { title: "Services", color: "#6577F3", total: "34%" },
        ]}
      />
    </ChartContainer>
  );
};

export default DoughnutChart;
