import { httpPost } from '@shared/utils/httpRequest';
import type { RequestProductUpdateParams } from '../types';

export const updateProductTitle = async (params: RequestProductUpdateParams) => {
  const result = await httpPost<RequestProductUpdateParams>('/api/product', params);
  return result;
};
