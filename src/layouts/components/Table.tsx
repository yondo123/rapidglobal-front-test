'use client';

import { Text } from './Text';
import { TableContainer, createTableStyle, createTableTextAlignStyle } from '../styles/tableStyles';
import type { ColorScheme, TableVariants } from '../types';

interface TableCationProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
  children: React.ReactNode;
}
const TableCaption = ({ children, ...tableCaptionProps }: TableCationProps) => (
  <caption {...tableCaptionProps}>
    <Text align="center">{children}</Text>
  </caption>
);

interface TableSectionProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const TableHead = ({ children, ...tableHeadProps }: TableSectionProps) => <thead {...tableHeadProps}>{children}</thead>;

const TableBody = ({ children, ...tableBodyProps }: TableSectionProps) => <tbody {...tableBodyProps}>{children}</tbody>;

const TableFoot = ({ children, ...tableFootProps }: TableSectionProps) => <tfoot {...tableFootProps}>{children}</tfoot>;

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}
const TableRow = ({ children, ...tableRowProps }: TableRowProps) => <tr {...tableRowProps}>{children}</tr>;

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  children: React.ReactNode;
}
const TableHeader = ({ children, ...tableHeaderProps }: TableHeaderProps) => <th {...tableHeaderProps}>{children}</th>;

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}
const TableCell = ({ children, ...tableCellProps }: TableCellProps) => <td {...tableCellProps}>{children}</td>;

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  variant?: TableVariants;
  align?: 'left' | 'center' | 'right';
}

export const Table = ({ colorScheme = 'primary', variant = 'simple', align = 'left', children }: TableProps) => {
  const tableStyle = createTableStyle(colorScheme, variant);
  const tableAlignStyle = createTableTextAlignStyle(align);
  return (
    <TableContainer>
      <table css={[tableStyle, tableAlignStyle]}>{children}</table>
    </TableContainer>
  );
};

Table.Caption = TableCaption;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;
