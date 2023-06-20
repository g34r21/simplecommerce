import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { loadProducts } from '~/store/slices/catalog';

const useLoadProducts = (): void => {
  const dispatch = useDispatch();
  const dispatchedLoadProducts = useRef(false);

  useEffect(() => {
    if (dispatchedLoadProducts.current) return;
    dispatchedLoadProducts.current = true;
    dispatch(loadProducts());
  }, [dispatch]);
};

export default useLoadProducts;
