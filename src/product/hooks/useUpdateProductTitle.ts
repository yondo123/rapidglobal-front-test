import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { MutateOptions } from '@tanstack/react-query';
import { updateProductTitle } from '../api/updateProductTitle';
import type { RequestProductUpdateParams } from '../api/models/product';

export const useUpdateProductTitle = (
  params: RequestProductUpdateParams,
  handleSuccess?: () => void | null,
  handleError?: (error: Error) => void | null,
  options?: MutateOptions
) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => updateProductTitle(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products']
      });
      handleSuccess?.();
    },
    onError: (error) => {
      handleError?.(error);
    },
    ...options
  });

  return { mutate, isPending };
};
