import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTitle = () => {
  const [pageTitle, setPageTitle] = useState('HOMEPAGE');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageTitle('HOMEPAGE');
        break;
      case '/shop':
        setPageTitle('SHOP');
        break;
      case '/cart':
        setPageTitle('CART');
        break;
      default:
        setPageTitle('DEFAULT');
    }
  }, [location.pathname]);

  return pageTitle;
};