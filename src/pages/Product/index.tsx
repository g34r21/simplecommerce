import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import NotFound from '~/components/NotFound';
import ProductView from '~/components/ProductView';
import { getProductById } from '~/store/selectors/catalog';

const ProductPage: FC = () => {
  const { productId } = useParams();
  const product = useSelector(getProductById(productId));

  if (!product) {
    return <NotFound />;
  }

  if (!productId) {
    return null;
  }

  return <ProductView productId={productId} />;
};

export default ProductPage;
