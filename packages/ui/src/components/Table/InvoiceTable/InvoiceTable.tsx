import React, { useState, useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { Button } from '../../Button';
import { ChevronDown } from '../../../icons';

/**
 * References: https://codesandbox.io/s/react-table-simple-typescript-forked-66qtqf?file=/src/App.tsx
 */
interface DataType {
  amount?: string;
  date?: string;
  invoice?: string;
  shipTo?: string;
  shipToAddress?: string;
  soldTo?: string;
  status?: string;
}

export interface InvoiceTableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columnsList: any;
  data: Array<DataType>;
  title: string;
  description: string;
  sorting: boolean;
  pagination: boolean;
  totalPageCount: number;
  onPageChange: (pageNo: number) => void;
  maxVisiblePages: number;
  defaultPageSize: number;
}

export const InvoiceTable = ({
  columnsList,
  data,
  title,
  description,
  sorting,
  pagination,
  totalPageCount,
  onPageChange,
  maxVisiblePages,
  defaultPageSize,
}: InvoiceTableProps): React.ReactElement => {
  const columns = useMemo(() => [...columnsList], [columnsList]);
  const invoices = useMemo(() => [...data], [data]);

  const [totalPagesCount] = useState(totalPageCount);

  const tableInstance = useTable(
    {
      columns,
      data: invoices,
      initialState: {
        pageSize: defaultPageSize,
        sortBy: [
          {
            id: 'date',
            desc: true,
          },
        ],
      },
      disableSortRemove: true,
      disableSortBy: sorting,
      manualPagination: !pagination,
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canNextPage,
    canPreviousPage,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex } = state;
  const currentPage = pageIndex + 1;

  /**
   * If totalPagesCount < maxVisiblePages, we will show complete page count Array 1,2,3
   * ELSE
   * We will show only 1 to maxVisiblePages page count Array 1,2,3....
   */

  const pages = Array.from(
    {
      length:
        totalPagesCount < maxVisiblePages + 1
          ? totalPagesCount
          : maxVisiblePages,
    },
    (_, index) => index + 1
  );

  const showInvoiceDate = (isoDate: string) => {
    const date = new Date(isoDate).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });

    return date;
  };

  return (
    <div className="bg-white p-8 px-0 text-left lg:p-8">
      <h2 className="border-brand-primary border-b pb-2 text-xl font-bold">
        {title}
      </h2>
      <p className="mt-3 mb-5 text-base font-light">{description}</p>

      {/* React Table */}
      <div className="overflow-auto">
        <table className="w-[1000px] text-left lg:w-full" {...getTableProps()}>
          <thead className="border-brand-accent-gray-light border-b-2">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="header pb-2 text-base"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex items-center">
                      <span className="mr-1">{column.render('Header')}</span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5 rotate-180" />
                        )
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className="border-brand-accent-gray-light  border-b"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    const isDateField = cell.column.Header === 'Date';
                    return (
                      <td className="py-4 font-light" {...cell.getCellProps()}>
                        {isDateField
                          ? showInvoiceDate(cell.value)
                          : cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <ul className="flex items-end">
          {/* Button Previous */}
          <li className="mr-2 text-sm">
            <Button
              type="button"
              variant="primary"
              size="sm"
              disabled={!canPreviousPage}
              onClick={() => onPageChange(currentPage - 1)}
            >
              Prev
            </Button>
          </li>

          {/* Page Count List */}
          {pages.map((page) => {
            return (
              <li
                key={page}
                className={`
                ${
                  page === currentPage
                    ? 'active bg-brand-primary text-white'
                    : null
                }
                border-brand-primary hover:bg-brand-primary mx-2 flex h-8 w-auto cursor-pointer items-center justify-center border py-2 px-3 text-sm transition duration-100 ease-in hover:text-white`}
                onClick={() => page !== currentPage && onPageChange(page)}
              >
                {page}
              </li>
            );
          })}

          {totalPagesCount >= maxVisiblePages + 1 ? (
            <>
              <li className="mx-3">...</li>
              <li
                className="border-brand-primary hover:bg-brand-primary mx-2 flex h-8 w-auto cursor-pointer items-center justify-center border py-2 px-3 text-sm transition duration-100 ease-in hover:text-white"
                onClick={() =>
                  totalPagesCount !== currentPage &&
                  onPageChange(totalPagesCount)
                }
              >
                {totalPagesCount}
              </li>
            </>
          ) : null}

          {/* Button Next */}
          <li className="ml-2 text-sm">
            <Button
              type="button"
              variant="primary"
              size="sm"
              disabled={!canNextPage}
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

InvoiceTable.displayName = 'InvoiceTable';
