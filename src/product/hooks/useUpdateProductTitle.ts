import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { MutateOptions } from '@tanstack/react-query';
import { updateProductTitle } from '../api/updateProductTitle';
import type { RequestProductUpdateParams } from '../types';

export const useUpdateProductTitle = (params: RequestProductUpdateParams, options?: MutateOptions) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => updateProductTitle(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products']
      });
    },
    ...options
  });

  return { mutate, isPending };
};
