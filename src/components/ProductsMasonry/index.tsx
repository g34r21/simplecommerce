import './ProductsMasonry.css';

import { type FC } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '~/components/ProductCard';
import useLoadProducts from '~/hooks/useLoadProducts';
import { getProducts } from '~/store/selectors/catalog';

const ProductsMasonry: FC = () => {
  const products = useSelector(getProducts);
  useLoadProducts();

  return (
    <div className="products-masonry__container">
      {Object.entries(products).map(([key, product]) => (
        <ProductCard key={key} product={{ ...product, id: key }} />
      ))}
    </div>
  );
};

export default ProductsMasonry;
