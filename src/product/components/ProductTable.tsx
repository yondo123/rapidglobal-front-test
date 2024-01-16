'use client';

import { Button, Table, Text, Modal } from '@layouts/components';
import { formatDateYYYYMMDD, formatCommaNumber } from '@shared/utils';
import { useState } from 'react';
import { useProductSort } from '../hooks/useProductSort';
import { ProductDetail } from './ProductDetail';
import { ProductTableHeader } from './ProductTableHeader';
import { ProductListPagination } from './ProductListPagination';
import { useGetProducts } from '../hooks/useGetProducts';
import { PRODUCT_TABLE_VIEW_COUNT } from '../constants';
import type { Product } from '../types';

interface ProductTableProps {
  currentPage: number;
}

export const ProductTable = ({ currentPage }: ProductTableProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productSort = useProductSort();
  const skip = PRODUCT_TABLE_VIEW_COUNT * (currentPage - 1) + 1;

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const { response, hasNextPage } = useGetProducts({
    skip,
    take: PRODUCT_TABLE_VIEW_COUNT,
    sortList: productSort
  });
  const { products } = response.pages[0];

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ProductDetail product={selectedProduct} />
      </Modal>
      <Table>
        <ProductTableHeader />
        <Table.Body>
          {products?.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell style={{ minWidth: '640px' }}>
                <Button variant="ghost" onClick={() => handleProductClick(product)}>
                  {product.id}. {product.title}
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Text bold="light">{formatDateYYYYMMDD(product.uploadedAt)}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text bold="light">{formatCommaNumber(product.price)} 원</Text>
              </Table.Cell>
              <Table.Cell>
                <Text bold="light">{formatCommaNumber(product.viewCount)}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ProductListPagination currentPage={currentPage} hasNext={hasNextPage} />
    </>
  );
};
