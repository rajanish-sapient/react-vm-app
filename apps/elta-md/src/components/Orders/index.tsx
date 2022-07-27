import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OrderTable } from 'ui';
import { useApi } from 'utils';
import { ORDER_TABLE_LABELS, ORDER_TABLE_CONFIG } from '../../constants';

import { api } from '../../lib/api';

const Orders = () => {
  const [orders, setOrders] = useState<[]>([]);
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

  const { exec: fetchOrderList } = useApi(() =>
    api.get(`/v1/orders`, defaultOrderQueryParams).then((resp) => {
      const pageSize = 20;
      const totalRecords = resp.data.totalRecords;
      const totalPagesCount = Math.ceil(totalRecords / pageSize);
      setTotalPageCount(totalPagesCount);
      setOrders(resp.data.data);
      setSearchParams({ ...defaultOrderQueryParams.params });
    })
  );

  useEffect(() => {
    fetchOrderList();
  }, []);

  // Todo: Change fetching Page Number Logic here once the API is fully functional
  const fetchPageNo = (pageNo: number) => {
    setSearchParams({ ...defaultOrderQueryParams.params, page: `${pageNo}` });
  };

  const { title, description } = ORDER_TABLE_LABELS;
  const { columns, sorting, pagination } = ORDER_TABLE_CONFIG;

  // No of pages to show in Pagination when there are more than this limit
  const maxVisiblePages = 3;

  // No of records per page
  const defaultPageSize = 20;

  return orders.length > 0 ? (
    <OrderTable
      columnsList={columns}
      data={orders}
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

export default Orders;
