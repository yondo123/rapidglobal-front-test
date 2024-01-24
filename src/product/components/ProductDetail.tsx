'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import { Heading, Text, Stack, Button } from '@layouts/components';
import { formatCommaNumber } from '@shared/utils/number';
import { ImageZoom } from '@shared/components/ImageZoom';
import { ProductEdit } from './ProductEdit';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product | null;
}
export const ProductDetail = ({ product }: ProductDetailProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [productTitle, setProductTitle] = useState<string | null>(product?.title ?? null);
  const thumbnails = product?.thumbnailUrls;

  if (!product) {
    return (
      <section role="alert" style={{ height: '128px', width: '480px' }}>
        <Heading size="lg" colorScheme="info">
          선택하신 상품 정보를 확인할 수 없습니다.
        </Heading>
        <Text style={{ marginTop: '16px' }}>다시 상품을 선택해주세요.</Text>
      </section>
    );
  }

  return (
    <ProductDetailContainer>
      {editMode ? (
        <ProductEdit
          product={{ ...product, title: productTitle ?? product.title }}
          handleEdit={(title) => {
            setEditMode(false);
            if (title) {
              setProductTitle(title);
            }
          }}
        />
      ) : (
        <Stack direction="horizontal" justify="between" spacing={8}>
          <Heading size="lg" colorScheme="tertiary">
            {productTitle}
          </Heading>
          <Button variant="outline" colorScheme="info" size="sm" onClick={() => setEditMode(true)}>
            제목 수정
          </Button>
        </Stack>
      )}
      <Stack direction="horizontal" justify="start" spacing={8} style={{ marginTop: '8px' }}>
        <Text colorScheme="tertiary">상품 번호</Text>
        <Text size="sm" colorScheme="label">
          No. {product.id}
        </Text>
      </Stack>
      <Stack direction="horizontal" justify="start" spacing={8} style={{ marginTop: '8px' }}>
        <Text colorScheme="tertiary">가격</Text>
        <Text size="sm" colorScheme="label">
          {formatCommaNumber(product.price)} 원
        </Text>
      </Stack>
      <ProductThumbnail>
        {thumbnails?.map((url) => (
          <ImageZoom key={url} src={url} alt={productTitle ?? 'product'} width={200} height={200} />
        ))}
      </ProductThumbnail>
    </ProductDetailContainer>
  );
};

const ProductDetailContainer = styled.section`
  width: 100%;
`;

const ProductThumbnail = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: auto;
  margin: 16px 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    margin: 8px;
  }
`;
