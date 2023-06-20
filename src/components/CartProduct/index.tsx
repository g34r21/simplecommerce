import './CartProduct.css';

import type { FC } from 'react';

import type { ICartProduct } from '~/types/cart';

const CartProduct: FC<{ product: ICartProduct & { id: string } }> = ({
  product: { quantity, image, title },
}) => (
  <div className="cart-product hr--primary">
    <div className="cart-product__badge">
      <p>{quantity}</p>
    </div>
    <div>
      <img className="cart-product__image" src={image} alt={title} />
    </div>
  </div>
);

export default CartProduct;
