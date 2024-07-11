// import { rowDefs, rows } from "../data";

type RowDef = { name: string; label: string; type: string };
type Row = Record<string, string | boolean | number>;

type DataTableProps = {
  rowDefs: RowDef[];
  rows: Row[];
  previewRows: string[];
};

export const DataTable = (props: DataTableProps) => {
  return (
    <table className="border-collapse border-6 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ease-in-out cursor-pointer">
      <thead>
        <tr className="bg-gray-400">
          {props.rowDefs.map((item) => (
            <th key={item.label} className="border-2 p-4">
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((item, index) => (
          <tr
            key={index}
            className="border-2 hover:bg-gray-100 transition-all duration-200 ease-in-out"
          >
            <td className="border-2 p-4">{item.name}</td>
            <td className="border-2 p-4">{item.age}</td>
            <td className="border-2 p-4">{item.job}</td>
            <td className="border-2 p-4">{item.looking ? "Yes" : "No"}</td>
            <td className="border-2 p-4">{item.married ? "Yes" : "No"}</td>
            <td className="border-2 p-4">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
