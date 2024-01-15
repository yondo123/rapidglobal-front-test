import { generateUrlParams, httpGet } from '@shared/utils/httpRequest';
import type { RequestProductsParams, ResponseProducts } from '@product/types';

export const getProducts = async ({ skip, take, sortList }: RequestProductsParams): Promise<ResponseProducts> => {
  const query = generateUrlParams({
    skip: skip.toString(),
    take: take.toString(),
    sortList: JSON.stringify(sortList ?? [])
  });
  const products = await httpGet<ResponseProducts>(`/api/product/list?${query}`);
  return products;
};
