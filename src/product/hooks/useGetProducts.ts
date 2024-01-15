import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import type { UseSuspenseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getProducts } from '../api/getProducts';
import { PRODUCT_TABLE_VIEW_COUNT } from '../constants';
import type { RequestProductsParams, ResponseProducts } from '../types';

export const useGetProducts = (params: RequestProductsParams, options?: UseSuspenseInfiniteQueryOptions) => {
  const { data, hasNextPage } = useSuspenseInfiniteQuery<ResponseProducts, Error>({
    queryKey: ['products', params],
    queryFn: (): Promise<ResponseProducts> => getProducts(params),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = params.skip + PRODUCT_TABLE_VIEW_COUNT;
      return nextPage < lastPage.totalCount ? nextPage : undefined;
    },
    ...options
  });

  return {
    response: data as InfiniteData<ResponseProducts, Error>,
    hasNextPage
  };
};
