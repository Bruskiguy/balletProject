"use client";

import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const DataTable = (props) => {
  const [cellContent, setCellContent] = useState({});
  const [editingCell, setEditingCell] = useState(null);
  const [cellIds, setCellIds] = useState({});

  useEffect(() => {
    const ids = {};
    props.rows.forEach((row, rowIndex) => {
      props.previewColumns.forEach((colName) => {
        ids[`${rowIndex}-${colName}`] = nanoid();
      });
    });
    setCellIds(ids);
  }, [props.rows, props.previewColumns]);

  const handleCellContentChange = (cellId, value) => {
    setCellContent({
      ...cellContent,
      [cellId]: value,
    });
  };

  const handleCellBlur = () => {
    setEditingCell(null);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCellBlur();
    }
  };

  return (
    <table className="mx-auto border-collapse border-6 bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer">
      <thead>
        <tr className="bg-gray-500">
          {props.previewColumns.map((item) => (
            <th key={nanoid()} className="border-2 p-4">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, rowIndex) => (
          <tr key={nanoid()}>
            {props.previewColumns.map((colName) => {
              const cellId = cellIds[`${rowIndex}-${colName}`];
              return (
                <td
                  key={cellId}
                  className="border-2 p-4 text-gray-900"
                  onClick={() => setEditingCell(cellId)}
                >
                  {editingCell === cellId ? (
                    <input
                      type="text"
                      value={cellContent[cellId] ?? row[colName]}
                      onChange={(e) =>
                        handleCellContentChange(cellId, e.target.value)
                      }
                      onKeyPress={handleKeyPress}
                      autoFocus
                    />
                  ) : (
                    cellContent[cellId] ?? row[colName]
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
