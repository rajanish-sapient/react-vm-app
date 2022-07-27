import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InvoiceTable } from './InvoiceTable';

/**
 * Types reference: https://stackoverflow.com/questions/66709899/ts2339-property-cell-does-not-exist-on-type-from-type-react-table-in-typescr
 */

const DATA = [
  {
    date: '2022-07-15T06:54:28.883Z',
    invoice: 'CK5976149A',
    currency: 'USD',
    amount: '241.48',
    status: 'Processing',
    shipTo: '705465',
    shipToAddress: '909 River Road, Piscataway NJ',
  },
  {
    date: '2022-03-24T1:3:00.000Z',
    order: 'DRE5976149A',
    currency: 'USD',
    amount: '236.48',
    status: 'Shipped',
    shipTo: '705465',
    shipToAddress: '909 River Road, Piscataway NJ',
  },
  {
    date: '2022-01-09T1:3:00.000Z',
    order: 'ZX5976149A',
    currency: 'USD',
    amount: '541.48',
    status: 'Credit Block',
    shipTo: '705465',
    shipToAddress: '909 River Road, Piscataway NJ',
  },
];

export const COLUMNS = [
  {
    Header: 'Date',
    accessor: 'date',
    disableSortBy: false,
    Cell: ({ value }: { value: string }) => {
      // Returning date in milliseconds to make it easier to sort ASC or DESC in table
      return new Date(value).getTime();
    },
  },
  {
    Header: 'Invoice #',
    accessor: 'invoice',
    disableSortBy: true,
    Cell: ({ value }: { value: string }) => (
      <span className="text-brand-accent-default font-normal">CK343456345</span>
    ),
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    disableSortBy: true,
    Cell: ({ value }: { value: string }) => <span>{value}</span>,
  },
  {
    Header: 'Status',
    accessor: 'status',
    disableSortBy: true,
    Cell: ({ value }: { value: string }) => <span>{value}</span>,
  },
  {
    Header: 'Ship To',
    accessor: 'shipTo',
    disableSortBy: false,
    Cell: ({ value }: { value: string }) => <span>{value}</span>,
  },
  {
    Header: 'Ship To Address',
    accessor: 'shipToAddress',
    disableSortBy: true,
    Cell: ({ value }: { value: string }) => <span>{value}</span>,
  },
];

const defaultPageSize = 20;
const totalPagesCount = Math.ceil(DATA.length / defaultPageSize);
const mockedPageChange = jest.fn();

const defaultProps = {
  columnsList: COLUMNS,
  data: DATA,
  title: 'Invoice History',
  description: 'View and track your orders from the last 6 months',
  sorting: false,
  pagination: true,
  totalPageCount: totalPagesCount,
  onPageChange: mockedPageChange,
  maxVisiblePages: 3,
  defaultPageSize: defaultPageSize,
};

describe('InvoiceTable', () => {
  it('renders correctly', () => {
    const { getByText } = render(<InvoiceTable {...defaultProps} />);
    const tableTitle = getByText(/Invoice History/i);
    expect(tableTitle).toBeInTheDocument();
  });

  it('renders correct title and description', () => {
    const { getByText } = render(
      <InvoiceTable
        {...defaultProps}
        title="Invoice History"
        description="Select the invoices to view PDF"
      />
    );
    const tableTitle = getByText(/Invoice History/i);
    const tableDescription = getByText(/Select the invoices to view PDF/i);
    expect(tableTitle).toBeInTheDocument();
    expect(tableDescription).toBeInTheDocument();
  });

  it('renders right number of columns', () => {
    const { container } = render(<InvoiceTable {...defaultProps} />);
    const headers = container.getElementsByClassName('header');
    expect(headers.length).toBe(COLUMNS.length);
  });
});
