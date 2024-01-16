'use client';

import { useState } from 'react';
import { InputText, Stack, Button, Text } from '@layouts/components';
import { useUpdateProductTitle } from '../hooks/useUpdateProductTitle';
import type { Product } from '../types';

interface ProductEditProps {
  product: Product;
}
export const ProductEdit = ({ product }: ProductEditProps) => {
  const [productTitle, setProductTitle] = useState<string>(product.title);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const { mutate: updateProductTitle, isPending } = useUpdateProductTitle({
    id: product.id,
    title: productTitle
  });

  const handleSaveProductTitle = () => {
    if (!productTitle) {
      setStateMessage('상품 제목을 입력해주세요.');
      return;
    }
    updateProductTitle();
    setStateMessage('성공적으로 상품 제목을 변경했습니다.');
  };
  return (
    <div>
      <Stack direction="horizontal" justify="start" spacing={8}>
        <InputText
          variant="flushed"
          size="lg"
          colorScheme="tertiary"
          defaultValue={product.title}
          style={{ width: '600px' }}
          onChange={(e) => setProductTitle(e.target.value)}
        />
        <Button colorScheme="accent" size="sm" variant="outline" onClick={handleSaveProductTitle} disabled={isPending}>
          저장
        </Button>
      </Stack>
      {stateMessage && (
        <Text colorScheme="info" style={{ marginTop: '8px' }}>
          {stateMessage}
        </Text>
      )}
    </div>
  );
};
