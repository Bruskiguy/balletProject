"use client";

import React from "react";

export const DataTable = (props) => {
  console.log(props);

  const [editingCell, setEditingCell] = React.useState({
    rowIndex: null,
    colName: null,
  });

  return (
    <table className="mx-auto border-collapse border-6 bg-gray-600 transition-colors duration-300 ease-in-out cursor-pointer">
      <thead>
        <tr className="bg-gray-500">
          {props.previewColumns.map((item) => {
            return (
              <th key={`${item}-${item}`} className="border-2 p-4">
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, rowIndex) => {
          console.log(`Row ${rowIndex}:`, row); // Log the entire row object
          return (
            <tr key={rowIndex}>
              {props.previewColumns.map((colName) => {
                const cellValue = row[colName];
                console.log(
                  `Column ${colName} - Row: ${rowIndex} Value: ${cellValue}`
                );
                return (
                  <td
                    key={`${colName}-${rowIndex}`}
                    className="border-2 p-4 hover:bg-slate-900"
                  >
                    {cellValue}
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
