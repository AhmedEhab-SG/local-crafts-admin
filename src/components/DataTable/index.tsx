"use client";

import { FC } from "react";
import { TableData } from "./Table";

interface DataTableProps {
  columns: any;
  data: any[];
}

const DataTable: FC<DataTableProps> = ({ columns, data }) => {
  return <TableData columns={columns} data={data} />;
};

export default DataTable;
