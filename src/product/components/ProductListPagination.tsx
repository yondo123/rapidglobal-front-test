'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import { Stack, Button } from '@layouts/components';
import { PRODUCT_TABLE_PAGE_LENGTH } from '../constants';

const PaginationContainer = styled.div`
  margin: 16px 0;
`;

interface ProductListPaginationProps {
  currentPage: number;
  hasNext: boolean;
}

export const ProductListPagination = ({ currentPage, hasNext }: ProductListPaginationProps) => {
  const router = useRouter();
  const startPage = Math.floor((currentPage - 1) / PRODUCT_TABLE_PAGE_LENGTH) * PRODUCT_TABLE_PAGE_LENGTH + 1;
  const endPage = startPage + PRODUCT_TABLE_PAGE_LENGTH - 1;
  const pageList = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handleNextPage = () => {
    router.push(`/?page=${currentPage + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/?page=${currentPage - 1}`);
  };
  return (
    <PaginationContainer>
      <Stack direction="horizontal" spacing={8}>
        <Button variant="ghost" disabled={currentPage <= 1} onClick={handlePrevPage}>
          이전
        </Button>
        {pageList.map((page) => (
          <Link key={page} href={`/?page=${page}`}>
            {page}
          </Link>
        ))}
        <Button variant="ghost" disabled={!hasNext} onClick={handleNextPage}>
          다음
        </Button>
      </Stack>
    </PaginationContainer>
  );
};
