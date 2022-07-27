// Todo: Remove static Tracking ID later

export const ORDER_TABLE_COLUMNS = [
  {
    Header: "Date",
    accessor: "date",
    disableSortBy: false,
    Cell: ({ value }) => {
      // Returning date in milliseconds to make it easier to sort ASC or DESC in table
      return new Date(value).getTime();
    }
  },
  {
    Header: "Order #",
    accessor: "order",
    disableSortBy: true,
    Cell: ({ value }) => <span className="text-brand-accent-default font-normal">{value}</span>
  },
  {
    Header: "Amount",
    accessor: "amount",
    disableSortBy: true,
    Cell: ({ value }) => <span>{value}</span>
  },
  {
    Header: "Status",
    accessor: "status",
    disableSortBy: true,
    Cell: ({ value }) => <span>{value}</span>
  },
  {
    Header: "Tracking #",
    accessor: "tracking",
    disableSortBy: true,
    Cell: ({ value }) => {
      return (
        <span>
          {[value].map(item => <a key={item.id} href={item.url} title={item.id} target="_blank" className="text-brand-accent-default">{item.id}</a>)}
        </span>
      )

    }
  },
  {
    Header: "Ship To",
    accessor: "shipTo",
    disableSortBy: false,
    Cell: ({ value }) => <span>{value}</span>
  },
  {
    Header: "Ship To Address",
    accessor: "shipToAddress",
    disableSortBy: true,
    Cell: ({ value }) => <span>{value}</span>
  },
];

export const INVOICES_TABLE_COLUMNS = [
  {
    Header: "Date",
    accessor: "date",
    disableSortBy: false,
    Cell: ({ value }) => {
      // Returning date in milliseconds to make it easier to sort ASC or DESC in table
      return new Date(value).getTime();
    }
  },
  {
    Header: "Invoice #",
    accessor: "invoice",
    disableSortBy: true,
    Cell: () => <span className="text-brand-accent-default font-normal">CK343456345</span>
  },
  {
    Header: "Amount",
    accessor: "amount",
    disableSortBy: true,
    Cell: ({ value }) => <span>{value}</span>
  },
  {
    Header: "Status",
    accessor: "status",
    disableSortBy: true,
    Cell: ({ value }) => <span>{value}</span>
  },
  {
    Header: "Ship To",
    accessor: "shipTo",
    disableSortBy: false,
    Cell: ({ value }) => <span>{value}</span>
  },
  {
    Header: "Ship To Address",
    accessor: "shipToAddress",
    disableSortBy: true,
    Cell: ({ value }) => <span>{value}</span>
  },
];
