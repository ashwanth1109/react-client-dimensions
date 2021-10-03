import { useEffect, useState, useCallback } from 'react';

export const useClientDimensions = () => {
  const isBrowser = typeof window !== undefined
  const getClientDimensions = useCallback(
    // isBrowser check is for systems like gatsby which do server side rendering during build
    () => isBrowser && ({ vw: window.innerWidth, vh: window.innerHeight }),
    []
  );
  const [dimensions, setDimensions] = useState(getClientDimensions());

  const handleResize = useCallback(() => setDimensions(getClientDimensions()), [
    getClientDimensions,
  ]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return dimensions;
};
