"use client";

import ChartContainer from "./shared/ChartContainer";
import ChartHeader from "./shared/ChartHeader";
import ChartFooter from "./shared/ChartFooter";
import TableChart from "./shared/TableChart";
import { useState } from "react";

const BarChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: "Revenue",
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  });

  return (
    <ChartContainer>
      <ChartHeader title="Service & Products" />
      <TableChart state={state} />
      <ChartFooter />
    </ChartContainer>
  );
};

export default BarChart;
