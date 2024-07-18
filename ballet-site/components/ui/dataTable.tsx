"use client";

import React, { useState } from "react";

export const DataTable = (props) => {
  const [cellContent, setCellContent] = useState({});
  const [editingCell, setEditingCell] = useState(null);

  const generateCellId = (rowIndex, colName) => `${rowIndex}-${colName}`;

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

  // Function to render boolean values as "Yes" or "No"
  const renderBooleanValue = (value) => {
    return value ? "Yes" : "No";
  };

  return (
    <table className="mx-auto border-collapse border-6 bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer">
      <thead>
        <tr className="bg-gray-500">
          {props.previewColumns.map((item) => (
            <th key={item} className="border-2 p-4">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {props.previewColumns.map((colName) => {
              const cellId = generateCellId(rowIndex, colName);
              const isEditing = editingCell === cellId;

              return (
                <td
                  key={cellId}
                  className="border-2 p-4 text-gray-900"
                  onClick={() => setEditingCell(cellId)}
                >
                  {isEditing ? (
                    <input
                      type="text"
                      value={cellContent[cellId] ?? row[colName]}
                      onChange={(e) =>
                        handleCellContentChange(cellId, e.target.value)
                      }
                      onKeyPress={handleKeyPress}
                      autoFocus
                    />
                  ) : typeof row[colName] === "boolean" ? (
                    renderBooleanValue(row[colName])
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
