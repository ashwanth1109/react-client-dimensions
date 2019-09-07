import { useEffect, useState, useCallback } from "react";

const useClientDimensions = () => {
  const getClientDimensions = useCallback(
    () => ({
      vw: window.innerWidth,
      vh: window.innerHeight
    }),
    []
  );

  const [dimensions, setDimensions] = useState(getClientDimensions());

  const handleResize = useCallback(() => setDimensions(getClientDimensions()), [
    getClientDimensions
  ]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return dimensions;
};

export default useClientDimensions;
