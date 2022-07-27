import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InvoiceTable } from 'ui';
import { useApi } from 'utils';
import { INVOICE_TABLE_LABELS, INVOICE_TABLE_CONFIG } from '../../constants';

import { api } from '../../lib/api';

const Invoices = () => {
  const [invoices, setInvoices] = useState<[]>([]);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [, setSearchParams] = useSearchParams();

  const defaultOrderQueryParams = {
    // Todo: Set it dynamically later
    params: {
      customerId: '8927185',
      brand: 'eltaMD',
      region: 'us',
      page: '1',
      limit: '20',
      sortBy: 'date',
      sortOrder: '1',
    },
  };
  const { exec: fetchInvoicesList } = useApi(() =>
    api.get(`/v1/invoices`, defaultOrderQueryParams).then((resp) => {
      const pageSize = 20;
      const totalRecords = resp.data.totalRecords;
      const totalPagesCount = Math.ceil(totalRecords / pageSize);
      setTotalPageCount(totalPagesCount);
      setInvoices(resp.data.data);
      setSearchParams({ ...defaultOrderQueryParams.params });
    })
  );

  useEffect(() => {
    fetchInvoicesList();
  }, []);

  // Todo: Change fetching Page Number Logic here once the API is fully functional
  const fetchPageNo = (pageNo: number) => {
    setSearchParams({ ...defaultOrderQueryParams.params, page: `${pageNo}` });
  };

  const { title, description } = INVOICE_TABLE_LABELS;
  const { columns, sorting, pagination } = INVOICE_TABLE_CONFIG;

  // No of pages to show in Pagination when there are more than this limit
  const maxVisiblePages = 3;

  // No of records per page
  const defaultPageSize = 20;

  return invoices.length > 0 ? (
    <InvoiceTable
      columnsList={columns}
      data={invoices}
      title={title}
      description={description}
      sorting={sorting}
      pagination={pagination}
      totalPageCount={totalPageCount}
      onPageChange={fetchPageNo}
      maxVisiblePages={maxVisiblePages}
      defaultPageSize={defaultPageSize}
    />
  ) : null;
};

export default Invoices;
