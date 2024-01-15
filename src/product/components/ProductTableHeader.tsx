'use client';

import { Button, Stack, Table } from '@layouts/components';
import { ChevronTop, ChevronBottom, Sort } from '@layouts/icons';
import { productSortStore } from '../store/productSortStore';
import type { SortAction } from '../types';

const getSortIcon = (sort: SortAction) => {
  switch (sort) {
    case 'asc':
      return <ChevronTop />;
    case 'desc':
      return <ChevronBottom />;
    default:
      return <Sort />;
  }
};

export const ProductTableHeader = () => {
  const { priceSort, titleSort, uploadedAtSort, setPriceSort, setTitleSort, setUploadedSort } = productSortStore();
  return (
    <Table.Head>
      <Table.Row>
        <Table.Header>
          <Stack direction="horizontal" spacing={8}>
            상품이름
            <Button size="sm" variant="ghost" onClick={() => setTitleSort(titleSort)}>
              {getSortIcon(titleSort)}
            </Button>
          </Stack>
        </Table.Header>
        <Table.Header>
          <Stack direction="horizontal" spacing={8}>
            등록 날짜
            <Button size="sm" variant="ghost" onClick={() => setUploadedSort(uploadedAtSort)}>
              {getSortIcon(uploadedAtSort)}
            </Button>
          </Stack>
        </Table.Header>
        <Table.Header>
          <Stack direction="horizontal" spacing={8}>
            상품 가격
            <Button size="sm" variant="ghost" onClick={() => setPriceSort(priceSort)}>
              {getSortIcon(priceSort)}
            </Button>
          </Stack>
        </Table.Header>
        <Table.Header>조회수</Table.Header>
      </Table.Row>
    </Table.Head>
  );
};
