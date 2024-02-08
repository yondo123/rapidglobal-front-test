import type { Product, SortList } from '@product/types';

export type RequestProductUpdateParams = Pick<Product, 'id' | 'title'>;

export type RequestProductsParams = {
  skip: number;
  take: number;
  sortList?: SortList;
};

export type ResponseProducts = {
  products: Product[];
  totalCount: number;
};
