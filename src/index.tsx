import { useCallback } from 'react';

export const useClientDimensions = () => {
  const getClientDimensions = useCallback(
    () => ({
      vw: window.innerWidth,
      vh: window.innerHeight,
    }),
    []
  );
};
