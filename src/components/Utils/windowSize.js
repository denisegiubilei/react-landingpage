import { useLayoutEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export { useIsMobile };
