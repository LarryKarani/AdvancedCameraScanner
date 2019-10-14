import React from 'react';
import Table from './TableScreen'
import columns from '../constants/dataSource'
import data from "../constants/dataSource";

const TableData = () => {
  return (
    <Table
      height={320}
      columnWidth={60}
      columns={columns}
      dataSource={data}
    />
  );

}
export default TableData