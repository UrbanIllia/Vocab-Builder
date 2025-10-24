import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const WordsTable = ({ data = [] }) => {
  // ✅ 1. Определяем колонки
  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("en", {
        header: "English",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("ua", {
        header: "Ukrainian",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("category", {
        header: "Category",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("isIrregular", {
        header: "Irregular",
        cell: (info) => (info.getValue() ? "✅" : "—"),
      }),
      columnHelper.accessor("progress", {
        header: "Progress",
        cell: (info) => `${info.getValue()}%`,
      }),
    ],
    [columnHelper],
  );

  // ✅ 2. Создаем таблицу
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // ✅ 3. Отображаем
  return (
    <div className="overflow-x-auto rounded-[15px] border border-gray-200">
      <table className="w-full border-collapse text-left text-sm text-gray-800">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-3 font-semibold">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-200 transition hover:bg-gray-50"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordsTable;
