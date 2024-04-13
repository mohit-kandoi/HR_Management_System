'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
  SortDescriptor,
} from '@nextui-org/react';

// const rows = [
//   {
//     key: '1',
//     name: 'Tony Reichert',
//     department: 'CEO',
//     status: 'Active',
//   },
//   {
//     key: '2',
//     name: 'Zoey Lang',
//     department: 'Technical Lead',
//     status: 'InActive',
//   },
//   {
//     key: '3',
//     name: 'Jane Fisher',
//     department: 'Senior Developer',
//     status: 'Active',
//   },
//   {
//     key: '4',
//     name: 'William Howard',
//     department: 'Community Manager',
//     status: 'InActive',
//   },
//   {
//     key: '5',
//     name: 'Emily Collins',
//     department: 'Marketing Manager',
//     status: 'Active',
//   },
//   {
//     key: '6',
//     name: 'Brian Kim',
//     department: 'Product Manager',
//     status: 'Active',
//   },
//   {
//     key: '7',
//     name: 'Laura Thompson',
//     department: 'UX Designer',
//     status: 'Active',
//   },
//   {
//     key: '8',
//     name: 'Michael Stevens',
//     department: 'Data Analyst',
//     status: 'InActive',
//   },
//   {
//     key: '9',
//     name: 'Sophia Nguyen',
//     department: 'Quality Assurance',
//     status: 'Active',
//   },
//   {
//     key: '10',
//     name: 'James Wilson',
//     department: 'Front-end Developer',
//     status: 'InActive',
//   },
//   {
//     key: '11',
//     name: 'Ava Johnson',
//     department: 'Back-end Developer',
//     status: 'Active',
//   },
//   {
//     key: '12',
//     name: 'Isabella Smith',
//     department: 'Graphic Designer',
//     status: 'Active',
//   },
//   {
//     key: '13',
//     name: 'Oliver Brown',
//     department: 'Content Writer',
//     status: 'InActive',
//   },
//   {
//     key: '14',
//     name: 'Lucas Jones',
//     department: 'Project Manager',
//     status: 'Active',
//   },
//   {
//     key: '15',
//     name: 'Grace Davis',
//     department: 'HR Manager',
//     status: 'Active',
//   },
//   {
//     key: '16',
//     name: 'Elijah Garcia',
//     department: 'Network Administrator',
//     status: 'Active',
//   },
//   {
//     key: '17',
//     name: 'Emma Martinez',
//     department: 'Accountant',
//     status: 'InActive',
//   },
//   {
//     key: '18',
//     name: 'Benjamin Lee',
//     department: 'Operations Manager',
//     status: 'Active',
//   },
//   {
//     key: '19',
//     name: 'Mia Hernandez',
//     department: 'Sales Manager',
//     status: 'InActive',
//   },
//   {
//     key: '20',
//     name: 'Daniel Lewis',
//     department: 'DevOps Engineer',
//     status: 'Active',
//   },
// ];

const columns = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'department',
    label: 'DEPARTMENT',
  },
  {
    key: 'status',
    label: 'STATUS',
  },
];
// type User = (typeof rows)[0];

const UserTable = (props: any) => {
  const { rows } = props;
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 3;

  const pages = Math.ceil(rows.length / rowsPerPage);

  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending',
  });
  const sortedItems = React.useMemo(() => {
    return [...rows].sort((a: Product, b: Product) => {
      const first = a[sortDescriptor.column as keyof Product];
      const second = b[sortDescriptor.column as keyof Product];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, rows]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return sortedItems.slice(start, end);
  }, [page, sortedItems]);

  return (
    <Table
      aria-label="Example table with dynamic content"
      // bottomContentPlacement="outside"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      classNames={{
        wrapper: 'min-h-[222px]',
      }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            {...(column.key === 'name' ? { allowsSorting: true } : {})}
            {...(column.key === 'department' ? { allowsSorting: true } : {})}
            {...(column.key === 'status' ? { allowsSorting: true } : {})}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default UserTable;
