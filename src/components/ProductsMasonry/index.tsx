import './ProductsMasonry.css';

import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import useLoadProducts from '~/hooks/useLoadProducts';
import { getProducts } from '~/store/selectors/catalog';

const ProductsMasonry: FC = () => {
  const products = useSelector(getProducts);
  useLoadProducts();
  const { productId } = useParams();

  return (
    <div className="products-masonry__container">
      {Object.entries(products).map(([key, product]) => (
        <div
          key={key}
          className={`products-masonry__card ${
            productId === key ? 'products-masonry__card--active' : ''
          }`}
          data-testid="productContainer"
        >
          <Link to={`/products/${key}`}>
            <img
              data-testid="productImage"
              className="products-masonry__image"
              src={product.image}
              alt={product.title}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsMasonry;
