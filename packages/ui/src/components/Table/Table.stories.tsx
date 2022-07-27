import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderTable } from './OrderTable/OrderTable';
import { COLUMNS } from './data/COLUMNS.js';
import Data from './data/MOCK_DATA.json';
// import { COLUMNS } from './OrderTable/data/COLUMNS.js';

const title = 'Order History';
const description = 'View and track your orders from the last 6 months';
const columns = COLUMNS;
const sorting = false;
const pagination = true;
const maxVisiblePages = 3;
const defaultPageSize = 20;
const totalPagesCount = Math.ceil(Data.length / defaultPageSize);

export default {
  title: 'Table',
  component: OrderTable,
} as ComponentMeta<typeof OrderTable>;

const fetchPageNo = (pageNo: number) => {
  // console.log('Fetch Page No', pageNo);
};

const Template: ComponentStory<typeof OrderTable> = (args) => (
  <OrderTable
    columnsList={columns}
    data={Data}
    title={title}
    description={description}
    sorting={sorting}
    pagination={pagination}
    totalPageCount={totalPagesCount}
    onPageChange={fetchPageNo}
    maxVisiblePages={maxVisiblePages}
    defaultPageSize={defaultPageSize}
  />
);

export const Default = Template.bind({});
