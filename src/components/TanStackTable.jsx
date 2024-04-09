import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { USERS } from "../data";
import { useState } from "react";
import DownloadBtn from "./DownloadBtn";
import DebouncedInput from "./DebouncedInput";
import { SearchIcon } from "../Icons/Icons";

const myData = [
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  {
    Device: "Kagitumba",
    Moisture: 16.01,
    Temperature: 16.02,
    Electro: 16.0,
    Nitrogen: 16.0,
    Phosphorus: 16.0,
    PH: 16.0,
    Battery: 16.0,
    Status: 16.0,
    progress4: 16.0,
  },
  // Add more objects as needed
];

const TanStackTable = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("Device", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Device Name",
    }),
    columnHelper.accessor("Moisture", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Soil Moisture",
    }),
    columnHelper.accessor("Temperature", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "soil Temperature",
    }),
    columnHelper.accessor("Electro", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Electro-conductivity",
    }),
    columnHelper.accessor("Nitrogen", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Nitrogen",
    }),
    columnHelper.accessor("Phosphorus", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Phosphorus",
    }),
    columnHelper.accessor("PH", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "PH",
    }),
    columnHelper.accessor("Battery", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Battery level",
    }),
    columnHelper.accessor("Status", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Status",
    }),
    columnHelper.accessor("progress4", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Progress4",
    }),
  ];
  const [data] = useState(() => [...myData]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-2 max-w-5xl bg-white mx-auto text-black fill-gray-400">
      <div className="flex justify-between mb-2">
        <div className="w-full flex items-center gap-1">
          <SearchIcon />
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
            placeholder="Search all columns..."
          />
        </div>
        <DownloadBtn data={data} fileName={"peoples"} />
      </div>
      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="font-['Inter'] text-xs font-medium text-[#667085] px-3.5  py-2 "
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr key={row.id} className="text-[#667085]">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-3.5 font-['Inter'] text-xs py-2"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={12}>No Recoard Found!</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex items-center justify-end mt-2 gap-2">
        <button
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {">"}
        </button>

        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 bg-white"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-white"
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TanStackTable;
