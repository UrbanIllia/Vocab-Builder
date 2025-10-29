import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import RowActions from "./RowActions";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { isLoading } from "../redux/wordsUser/selectorsWordsUser";
import Loader from "./Loader";

const WordsTable = ({ data = [] }) => {
  // ✅ 1. Определяем колонки
  const columnHelper = createColumnHelper();
  const isLoad = useSelector(isLoading);
  const columns = useMemo(
    () => [
      columnHelper.accessor("en", {
        header: () => (
          <div className="flex items-center justify-between gap-2">
            <span className="text-base font-medium text-lightSecondGray md:text-lg xl:text-xl">
              Word
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              className="h-5 w-5 text-primaryGreen md:h-7 md:w-7 xl:h-8 xl:w-8"
            >
              <use href="/public/icons/sprite.svg#icon-united-kingdom" />
            </svg>
          </div>
        ),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("ua", {
        header: () => (
          <div className="flex items-center justify-between gap-2">
            <span className="text-base font-medium text-lightSecondGray md:text-lg xl:text-xl">
              Translation
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              className="h-5 w-5 text-primaryGreen md:h-7 md:w-7 xl:h-8 xl:w-8"
            >
              <use href="/public/icons/sprite.svg#icon-ukraine" />
            </svg>
          </div>
        ),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("category", {
        header: "Category",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("progress", {
        header: "Progress",
        cell: (info) => {
          const value = info.getValue();
          return (
            <div className="flex flex-row items-center justify-center gap-2">
              <span className="text-base font-medium text-lightSecondGray md:text-lg xl:text-xl">
                {value}%
              </span>
              <div className="h-6 w-6 md:h-[26px] md:w-[26px]">
                <CircularProgressbar
                  value={20}
                  text=""
                  strokeWidth="16"
                  styles={buildStyles({
                    pathColor: "#2bd627",
                    trailColor: "#d4f8d3",
                  })}
                />
              </div>
            </div>
          );
        },
      }),
      columnHelper.display({
        id: "actions", // обязательно уникальный ID
        header: "", // без заголовка
        cell: (cellProps) => {
          const row = cellProps.row; // вот он!
          return <RowActions row={row} />;
        },
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoad) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="bg-white p-0 md:rounded-[15px] md:p-[18px]">
      <div className="overflow-x-auto rounded-t-[8px] pb-20">
        <table className="w-full text-left text-lightSecondGray">
          <thead className="bg-primaryGreen/10 text-base">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border-r border-tableBorder px-[20px] py-[22px] font-medium last:border-r-0 md:text-lg xl:text-xl"
                  >
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
                className="border-b border-tableBorder transition hover:bg-gray-50"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-r border-tableBorder p-3 px-[14px] py-4 text-sm font-medium text-lightSecondGray last:border-r-0 md:px-[22px] md:py-[22px] md:text-lg xl:text-xl"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WordsTable;
