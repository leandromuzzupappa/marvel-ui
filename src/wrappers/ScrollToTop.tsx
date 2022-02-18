import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { IScrollToTop } from 'utils/interfaces/generalInterfaces';

const ScrollToTop = ({ children }: IScrollToTop) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
