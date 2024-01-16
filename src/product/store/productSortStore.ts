import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { SortAction, ProductSort } from '../types';

type StateAction = (prevSortAction: SortAction) => void;

interface ProductSortState extends Record<keyof ProductSort, SortAction> {
  setPriceSort: StateAction;
  setTitleSort: StateAction;
  setUploadedSort: StateAction;
  clearSort: () => void;
}

const handleSortAction = (prevSort: SortAction) => {
  switch (prevSort) {
    case 'asc':
      return 'desc';
    case 'desc':
      return null;
    default:
      return 'asc';
  }
};

export const productSortStore = create(
  persist<ProductSortState>(
    (set) => ({
      priceSort: null,
      titleSort: null,
      uploadedAtSort: null,
      setPriceSort: (prevSort) => set({ priceSort: handleSortAction(prevSort) }),
      setTitleSort: (prevSort) => set({ titleSort: handleSortAction(prevSort) }),
      setUploadedSort: (prevSort) => set({ uploadedAtSort: handleSortAction(prevSort) }),
      clearSort: () => set({ priceSort: null, titleSort: null, uploadedAtSort: null })
    }),
    {
      name: 'product-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
