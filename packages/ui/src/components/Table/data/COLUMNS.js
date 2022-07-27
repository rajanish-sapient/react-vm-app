// Todo: Remove static Tracking ID later

export const COLUMNS = [
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return new Date(value).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    },
  },
  {
    Header: "Order#",
    accessor: "orderID",
    disableSortBy: true,
    Cell: ({ value }) => {
      return `#${value}`;
    },
  },
  {
    Header: "Amount",
    accessor: "amount",
    disableSortBy: true
  },
  {
    Header: "Status",
    accessor: "status",
    disableSortBy: true
  },
  {
    Header: "Tracking#",
    accessor: "trackingID",
    disableSortBy: true,
    Cell: ({ value }) => {
      return '#134354';
    },
  },
  { Header: "Ship To", accessor: "shipTo", disableSortBy: true, },
  {
    Header: "Ship To Address",
    accessor: "shipToAddress",
    disableSortBy: true
  },
];
