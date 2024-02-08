import { httpPost } from '@shared/utils/httpRequest';
import type { RequestProductUpdateParams } from './models/product';

export const updateProductTitle = async (params: RequestProductUpdateParams) => {
  const result = await httpPost<RequestProductUpdateParams>('/api/product', params);
  return result;
};
