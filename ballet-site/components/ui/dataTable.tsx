"use client";

import React from "react";
import { nanoid } from "nanoid";

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
              <th key={nanoid()} className="border-2 p-4">
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, rowIndex) => {
          console.log(row);
          return (
            <tr key={nanoid()}>
              {props.previewColumns.map((colName) => (
                <td key={nanoid()} className="border-2 p-4">
                  {row[colName]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
