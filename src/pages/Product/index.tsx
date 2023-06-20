import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import NotFound from '~/components/NotFound';
import ProductCard from '~/components/ProductCard';
import { getProductById } from '~/store/selectors/catalog';

const ProductPage: FC = () => {
  const { productId } = useParams();
  const product = useSelector(getProductById(productId));

  if (!product) {
    return <NotFound />;
  }

  const { title, price, description, image } = product;

  return (
    <ProductCard
      title={title}
      price={price}
      description={description}
      image={image}
    />
  );
};

export default ProductPage;
