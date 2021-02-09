import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState();

  const handleScreenSize = () => {
    setIsMobile(window.innerWidth <= 820);
  };

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize);

    return window.removeEventListener('resize', handleScreenSize);
  });

  return isMobile;
};

export default useWindowSize;
