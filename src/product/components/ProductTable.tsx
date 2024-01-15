'use client';

import { Button, Table } from '@layouts/components';
import { formatDateYYYYMMDD, formatCommaNumber } from '@shared/utils';
import { useProductSort } from '../hooks/useProductSort';
import { ProductTableHeader } from './ProductTableHeader';
import { ProductListPagination } from './ProductListPagination';
import { useGetProducts } from '../hooks/useGetProducts';
import { PRODUCT_TABLE_VIEW_COUNT } from '../constants';

interface ProductTableProps {
  currentPage: number;
}

export const ProductTable = ({ currentPage }: ProductTableProps) => {
  const productSort = useProductSort();
  const { response, hasNextPage } = useGetProducts({
    skip: PRODUCT_TABLE_VIEW_COUNT * (currentPage - 1) + 1,
    take: PRODUCT_TABLE_VIEW_COUNT,
    sortList: productSort
  });

  return (
    <>
      <Table>
        <ProductTableHeader />
        <Table.Body>
          {response.pages[0].products.map(({ id, price, title, uploadedAt, viewCount }) => (
            <Table.Row key={id}>
              <Table.Cell style={{ minWidth: '640px' }}>
                <Button variant="ghost" size="sm">
                  {id}. {title}
                </Button>
              </Table.Cell>
              <Table.Cell>{formatDateYYYYMMDD(uploadedAt)}</Table.Cell>
              <Table.Cell>{formatCommaNumber(price)} 원</Table.Cell>
              <Table.Cell>{formatCommaNumber(viewCount)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ProductListPagination currentPage={currentPage} hasNext={hasNextPage} />
    </>
  );
};
