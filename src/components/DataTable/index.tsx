"use client";

import { CSSProperties, FC } from "react";
import { TableData } from "./Table";

interface DataTableProps {
  columns: any;
  title?: string;
  data: any[];
  className?: string;
}

const DataTable: FC<DataTableProps> = ({ columns, data, title, className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <TableData columns={columns} data={data} />
    </div>
  );
};

export default DataTable;
