import { useEffect, useState } from 'react';

export const useClientMounted = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted };
};
