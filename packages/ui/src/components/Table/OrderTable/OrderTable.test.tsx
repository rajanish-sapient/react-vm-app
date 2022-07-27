import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OrderTable } from './OrderTable';

/**
 * Types reference: https://stackoverflow.com/questions/66709899/ts2339-property-cell-does-not-exist-on-type-from-type-react-table-in-typescr
 */

interface TrackingIDType {
  id: string;
  url: string;
}

const DATA = [
  {
    date: '2022-07-15T06:54:28.883Z',
    order: 'CK5976149A',
    currency: 'USD',
    amount: '241.48',
    status: 'Processing',
    tracking: {
      id: '2354212',
      url: 'www.ups.com/track/12390521',
    },
    shipTo: '705465',
    shipToAddress: '909 River Road, Piscataway NJ',
  },
  {
    date: '2022-03-24T1:3:00.000Z',
    order: 'DRE5976149A',
    currency: 'USD',
    amount: '236.48',
    status: 'Shipped',
    tracking: {
      id: '2354212',
      url: 'www.ups.com/track/12390521',
    },
    shipTo: '705465',
    shipToAddress: '909 River Road, Piscataway NJ',
  },
  {
    date: '2022-01-09T1:3:00.000Z',
    order: 'ZX5976149A',
    currency: 'USD',
    amount: '541.48',
    status: 'Credit Block',
    tracking: {
      id: '2354212',
      url: 'www.ups.com/track/12390521',
    },
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
    Header: 'Order#',
    accessor: 'order',
    disableSortBy: true,
    Cell: ({ value }: { value: string }) => (
      <span className="text-brand-accent-default font-normal">{value}</span>
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
    Header: 'Tracking#',
    accessor: 'tracking',
    disableSortBy: true,
    Cell: ({ value }: { value: TrackingIDType }) => {
      return (
        <span>
          {[value].map((item) => (
            <a
              key={item.id}
              title={item.id}
              href={item?.url}
              target="_blank"
              className="text-brand-accent-default"
              rel="noreferrer"
            >
              {item?.id}
            </a>
          ))}
        </span>
      );
    },
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
  title: 'Order History',
  description: 'View and track your orders from the last 6 months',
  sorting: false,
  pagination: true,
  totalPageCount: totalPagesCount,
  onPageChange: mockedPageChange,
  maxVisiblePages: 3,
  defaultPageSize: defaultPageSize,
};

describe('OrderTable', () => {
  it('renders correctly', () => {
    const { getByText } = render(<OrderTable {...defaultProps} />);
    const tableTitle = getByText(/Order History/i);
    expect(tableTitle).toBeInTheDocument();
  });

  it('renders correct title and description', () => {
    const { getByText } = render(
      <OrderTable
        {...defaultProps}
        title="Invoice History"
        description="View and track your invoices from the last 6 months"
      />
    );
    const tableTitle = getByText(/Invoice History/i);
    const tableDescription = getByText(
      /View and track your invoices from the last 6 months/i
    );
    expect(tableTitle).toBeInTheDocument();
    expect(tableDescription).toBeInTheDocument();
  });

  it('renders right number of columns', () => {
    const { container } = render(<OrderTable {...defaultProps} />);
    const headers = container.getElementsByClassName('header');
    expect(headers.length).toBe(COLUMNS.length);
  });
});
