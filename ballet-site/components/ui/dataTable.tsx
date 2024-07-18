"use client";

import React from "react";

type Row = Record<string, string | boolean | number>;

type DataTableProps = {
  rows: Row[];
  previewColumns: string[];
};

export const DataTable = (props: DataTableProps) => {
  //console.log(props);

  function boolHandler(bool: boolean) {
    return bool === true ? "Yes" : "No";
  }

  return (
    <table className="mx-auto border-collapse border-6 bg-gray-600 transition-colors duration-300 ease-in-out cursor-pointer">
      <thead>
        <tr className="bg-gray-500">
          {props.previewColumns.map((item) => {
            return (
              <th key={item} className="border-2 p-4">
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((rowObject, rowIndex) => {
          // console.log(`Row ${rowIndex}:`, rowObject);
          return (
            <tr key={rowIndex}>
              {props.previewColumns.map((colName) => {
                const cellValue = rowObject[colName];
                console.log(
                  `Column ${colName} - Row: ${rowIndex} Value: ${cellValue}`
                );
                return (
                  <td
                    key={`${colName}-${rowIndex}`}
                    className="border-2 p-4 hover:bg-slate-900"
                  >
                    {typeof cellValue === "boolean"
                      ? boolHandler(cellValue)
                      : cellValue}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
