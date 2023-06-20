import './ProductsMasonry.css';

import { type FC } from 'react';
import { useSelector } from 'react-redux';

import useLoadProducts from '~/hooks/useLoadProducts';
import { getProducts } from '~/store/selectors/catalog';

const ProductsMasonry: FC = () => {
  const products = useSelector(getProducts);
  useLoadProducts();

  return (
    <div className="products-masonry__container">
      {Object.entries(products).map(([key, product]) => (
        <div
          data-testid="productContainer"
          className="products-masonry__card"
          key={key}
        >
          <img
            data-testid="productImage"
            className="products-masonry__image"
            src={product.image}
            alt={product.title}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsMasonry;
