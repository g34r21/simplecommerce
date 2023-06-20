import './ProductCard.css';

import type { FC } from 'react';

import { DEFAULT_CURRENCY_FORMAT, DEFAULT_LOCALE } from '~/constants';
import type { IProduct } from '~/types/catalog';

const ProductCard: FC<IProduct> = ({ title, price, description, image }) => (
  <div>
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
        <button className="button--primary" type="button">
          −
        </button>
        <button className="button--secondary" type="button">
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

export default ProductCard;
