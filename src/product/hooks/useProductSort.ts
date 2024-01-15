import { productSortStore } from '../store/productSortStore';
import type { SortList } from '../types';

export const useProductSort = (): SortList => {
  const { priceSort, titleSort, uploadedAtSort } = productSortStore();
  const sortList = [];
  if (priceSort) {
    sortList.push({ price: priceSort });
  }

  if (uploadedAtSort) {
    sortList.push({ uploadedAt: uploadedAtSort });
  }

  if (titleSort) {
    sortList.push({ productTitle: titleSort });
  }
  return sortList;
};
