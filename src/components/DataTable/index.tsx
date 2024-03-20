"use client";

import { FC } from "react";
import { TableData } from "./Table";
import ButtonStyled from "../shared/ButtonStyled";

interface DataTableProps {
  columns: any;
  title?: string;
  data: any[];
  className?: string;
  onClick?: () => void;
}

const DataTable: FC<DataTableProps> = ({
  columns,
  data,
  title,
  className,
  onClick,
}) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <TableData columns={columns} data={data} />
      {onClick && (
        <ButtonStyled
          onClick={onClick}
          primary
          small
          className="-mt-10"
          title="Add to table"
        />
      )}
    </div>
  );
};

export default DataTable;
