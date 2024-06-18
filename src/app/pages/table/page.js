"use client";
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';

const columns = [
  {
    name: '#',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'First',
    selector: row => row.first,
    sortable: true,
  },
  {
    name: 'Last',
    selector: row => row.last,
    sortable: true,
  },
  {
    name: 'Handle',
    selector: row => row.handle,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    first: 'Mark',
    last: 'Otto',
    handle: '@mdo',
  },
  {
    id: 2,
    first: 'Jacob',
    last: 'Thornton',
    handle: '@fat',
  },
  {
    id: 3,
    first: 'Larry the Bird',
    last: '',
    handle: '@twitter',
  },
];

const customStyles = {
  header: {
    style: {
      minHeight: '56px',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: '#e3e3e3',
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: '#e3e3e3',
      },
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: '#e3e3e3',
      },
    },
  },
};

const DataTableComponent = () => {
  const [filterText, setFilterText] = useState('');
  const filteredItems = data.filter(
    item => item.first.toLowerCase().includes(filterText.toLowerCase()) ||
            item.last.toLowerCase().includes(filterText.toLowerCase()) ||
            item.handle.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="mb-3"
      />
      <CSVLink data={filteredItems} filename="data.csv">
        Export to CSV
      </CSVLink>
      <DataTable
        title="Contact List"
        columns={columns}
        data={filteredItems}
        customStyles={customStyles}
        pagination
      />
    </div>
  );
};

export default DataTableComponent;
