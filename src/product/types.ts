export type Product = {
  id: number;
  title: string;
  price: number;
  uploadedAt: string;
  viewCount: number;
  thumbnailUrls: string[];
};

export type SortAction = 'asc' | 'desc' | null;

export type SortList = {
  price?: SortAction;
  productTitle?: SortAction;
  uploadedAt?: SortAction;
}[];

export type ProductSort = {
  priceSort: SortAction;
  titleSort: SortAction;
  uploadedAtSort: SortAction;
};
