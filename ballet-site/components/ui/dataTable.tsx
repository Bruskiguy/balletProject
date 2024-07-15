// import { rowDefs, rows } from "../data";

type RowDef = { name: string; label: string; type: string };
type Row = Record<string, string | boolean | number>;

type DataTableProps = {
  rowDefs: RowDef[];
  rows: Row[];
  previewColumns?: string[];
};

export const DataTable = (props: DataTableProps) => {
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
        {props.rows.map((item, index) => (
          <tr
            key={index}
            className="border-2 hover:bg-gray-300 transition-all duration-200 ease-in-out"
          >
            {(props.previewColumns
              ? props.previewColumns
              : Object.keys(item)
            ).map((col, i) => (
              <td className="p-3" key={i}>
                {mapRowValue(item, col, props.rowDefs)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// const mapRowValue = (row: Row, columnName: string, rowDefs: RowDef[]) => {
function mapRowValue(row: Row, columnName: string, rowDefs: RowDef[]) {
  const value = row[columnName];
  const thisRowDef = rowDefs.find((def) => def.name === columnName);

  if (thisRowDef?.type === "boolean") {
    return value === true ? "YES" : "NO";
  }

  return value;
}
