"use client";

import classNames from "classnames";
import React from "react";

type RowDef = { name: string; label: string; type: string };
type Row = Record<string, string | boolean | number>;

type DataTableProps = {
  rowDefs: RowDef[];
  rows: Row[];
  previewColumns?: string[];
  editViewType?: "inline" | "expanded";
};

// create a state for row and row value thats being edited
//on click make area a text-area

export const DataTable = (props: DataTableProps) => {
  const [editingCell, setEditingCell] = React.useState<{
    rowIndex: number;
    colName: string;
  }>();

  return (
    <table className=" mx-auto border-collapse border-6 bg-gray-600 transition-colors duration-300 ease-in-out cursor-pointer">
      <thead>
        <tr className="bg-gray-500">
          <>
            {(props.previewColumns
              ? props.previewColumns
              : Object.keys(props.rows[0])
            ).map((col) => (
              <th key={col} className="border-2 p-4">
                {props.rowDefs.find((def) => def.name === col)?.label}
              </th>
            ))}
          </>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((rowItem, index) => (
          <tr
            key={index}
            className="border- transition-all duration-200 ease-in-out"
          >
            {(props.previewColumns
              ? props.previewColumns
              : Object.keys(rowItem)
            ).map((columnName, i) => (
              <td
                className="hover:bg-gray-700 rounded-md p-3"
                key={i}
                onClick={() =>
                  setEditingCell({ rowIndex: index, colName: columnName })
                }
              >
                {editingCell?.colName === columnName &&
                editingCell?.rowIndex === index ? (
                  <EditCell row={rowItem} columnName={columnName} />
                ) : (
                  getCellPreviewData(rowItem, columnName, props.rowDefs)
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

type EditCellProps = {
  row: Row;
  columnName: string;
};

export const EditCell = ({ row, columnName }: EditCellProps) => {
  return (
    <>
      <input
        className="bg-gray-600 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="cellContent"
        defaultValue={String(row[columnName])}
      />
    </>
  );
};

// const mapRowValue = (row: Row, columnName: string, rowDefs: RowDef[]) => {
function getCellPreviewData(row: Row, columnName: string, rowDefs: RowDef[]) {
  const value = row[columnName];
  const thisRowDef = rowDefs.find((def) => def.name === columnName);

  if (thisRowDef?.type === "boolean") {
    return value === true ? "YES" : "NO";
  }

  return value;
}
