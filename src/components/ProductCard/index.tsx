import './ProductCard.css';

import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEFAULT_CURRENCY_FORMAT, DEFAULT_LOCALE } from '~/constants';
import { getCartProductById } from '~/store/selectors/cart';
import { getProductById } from '~/store/selectors/catalog';
import {
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
} from '~/store/slices/cart';

const ProductCard: FC<{ productId: string }> = ({ productId }) => {
  const cartProduct = useSelector(getCartProductById(productId));
  const product = useSelector(getProductById(productId));
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  const { image, title, price, description } = product;
  const quantity = cartProduct?.quantity || 0;

  const handleDecrease = (): void => {
    dispatch(decreaseCartProductQuantity(productId));
  };

  const handleIncrease = (): void => {
    dispatch(increaseCartProductQuantity(productId));
  };

  return (
    <div className="product__container">
      {quantity ? (
        <div className="product__quantity-badge">
          <p>{quantity}</p>
        </div>
      ) : null}
      <img
        className="product__image"
        data-testid="image"
        src={image}
        alt={title}
      />
      <div className="product__header">
        <h3 data-testid="title" className="product__title">
          {title}
          <span className="tertiary-color product__dot-spam">·</span>
          <span className="primary-color" data-testid="price">
            {price.toLocaleString(DEFAULT_LOCALE, DEFAULT_CURRENCY_FORMAT)}
          </span>
        </h3>
        <div className="product__buttons">
          <button
            onClick={handleDecrease}
            className="button--secondary"
            type="button"
          >
            −
          </button>
          <button
            onClick={handleIncrease}
            className="button--primary"
            type="button"
          >
            +
          </button>
        </div>
      </div>
      <hr className="hr--secondary" />
      <p data-testid="description" className="product__description">
        {description}
      </p>
      <hr className="hr--secondary" />
    </div>
  );
};

export default ProductCard;
