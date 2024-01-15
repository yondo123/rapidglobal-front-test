'use client';

import { Heading, Button, Stack } from '@layouts/components';
import { productSortStore } from '../store/productSortStore';

export const ProductListHeader = () => {
  const { clearSort } = productSortStore();
  return (
    <Stack as="header" direction="horizontal" justify="between" style={{ margin: '16px 0' }}>
      <Heading size="lg" colorScheme="primary">
        Rapid Global
      </Heading>
      <Button variant="outline" colorScheme="secondary" size="sm" onClick={clearSort}>
        정렬 초기화
      </Button>
    </Stack>
  );
};
