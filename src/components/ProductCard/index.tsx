import './ProductCard.css';

import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getCartProductById } from '~/store/selectors/cart';
import type { IProduct } from '~/types/catalog';

const ProductCard: FC<{ product: IProduct & { id: string } }> = ({
  product: { id, image, title },
}) => {
  const { productId } = useParams();
  const cartProduct = useSelector(getCartProductById(id));
  const quantity = cartProduct?.quantity || 0;
  return (
    <Link to={`/products/${id}`}>
      <div
        className={`product-card ${
          productId === id ? 'product-card--active' : ''
        }`}
        data-testid="productContainer"
      >
        {quantity ? (
          <div className="product-card__badge">
            <p>{quantity}</p>
          </div>
        ) : null}
        <img
          data-testid="productImage"
          className="product-card__image"
          src={image}
          alt={title}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
