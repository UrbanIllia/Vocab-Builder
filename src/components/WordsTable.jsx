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
import AddToDictionaryBtn from "./AddToDictionaryBtn";
import { allIsLoading } from "../redux/allWords/selectorsAllWords";

const WordsTable = ({ data = [], variant }) => {
  const recommend = variant === "recommend";
  const columnHelper = createColumnHelper();
  const isLoad = useSelector(isLoading);
  const isLoad2 = useSelector(allIsLoading);

  const columns = useMemo(() => {
    const baseColumns = [
      columnHelper.accessor("en", {
        header: () => (
          <div className="flex items-center justify-between gap-2">
            <span className="text-base font-medium text-lightSecondGray md:text-lg xl:text-xl">
              Word
            </span>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-primaryGreen md:h-7 md:w-7 xl:h-8 xl:w-8"
            >
              <use href="/icons/sprite.svg#icon-united-kingdom" />
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
              className="h-5 w-5 text-primaryGreen md:h-7 md:w-7 xl:h-8 xl:w-8"
            >
              <use href="/icons/sprite.svg#icon-ukraine" />
            </svg>
          </div>
        ),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("category", {
        header: "Category",
        cell: (info) => info.getValue(),
      }),
    ];

    if (!recommend) {
      baseColumns.push(
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
                    value={value ?? 0}
                    text=""
                    strokeWidth={16}
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
      );
    }

    baseColumns.push(
      columnHelper.display({
        id: "actions",
        header: "",
        maxSize: recommend ? 200 : 80,
        minSize: 80,
        size: recommend ? 150 : 50,
        cell: (cellProps) => {
          const row = cellProps.row;
          return (
            <div>
              {recommend ? (
                <AddToDictionaryBtn row={row} />
              ) : (
                <RowActions row={row} />
              )}
            </div>
          );
        },
      }),
    );

    return baseColumns;
  }, [columnHelper, recommend]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoad || isLoad2) {
    return (
      <div className="my-10 flex h-[200px] items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white p-0 md:rounded-[15px] md:p-[18px]">
      <div className="overflow-x-auto rounded-t-[8px]">
        <table className="w-full text-left text-lightSecondGray">
          <thead className="bg-primaryGreen/10 text-base">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ width: header.getSize() }}
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
                    style={{ width: cell.column.getSize() }}
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
