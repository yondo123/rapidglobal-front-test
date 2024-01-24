'use client';

import { useState } from 'react';
import { InputText, Stack, Button, Text } from '@layouts/components';
import { useUpdateProductTitle } from '../hooks/useUpdateProductTitle';
import type { Product } from '../types';

interface ProductEditProps {
  product: Product;
  handleEdit: (titleName?: string) => void;
}
export const ProductEdit = ({ product, handleEdit }: ProductEditProps) => {
  const [productTitle, setProductTitle] = useState<string>(product.title);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const successSaveAction = () => {
    setStateMessage('성공적으로 상품 제목을 변경했습니다.');
    handleEdit(productTitle);
  };
  const { mutate: updateProductTitle, isPending } = useUpdateProductTitle(
    {
      id: product.id,
      title: productTitle
    },
    successSaveAction
  );

  const handleSaveProductTitle = () => {
    if (!productTitle.trim()) {
      setStateMessage('상품 제목을 입력해주세요.');
      return;
    }
    updateProductTitle();
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
        <Button colorScheme="tertiary" size="sm" variant="outline" onClick={() => handleEdit()} disabled={isPending}>
          취소
        </Button>
      </Stack>
      {stateMessage && (
        <Text colorScheme="warning" style={{ marginTop: '8px' }}>
          {stateMessage}
        </Text>
      )}
    </div>
  );
};
