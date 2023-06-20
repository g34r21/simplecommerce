import './Cart.css';

import type { FC } from 'react';
import { useSelector } from 'react-redux';

import CartProduct from '~/components/CartProduct';
import { DEFAULT_CURRENCY_FORMAT, DEFAULT_LOCALE } from '~/constants';
import { getCartProducts, getCartTotal } from '~/store/selectors/cart';

const CartPage: FC = () => {
  const cartProducts = useSelector(getCartProducts);
  const cartTotal = useSelector(getCartTotal);
  return (
    <div>
      {Object.entries(cartProducts).map(([key, product]) => (
        <CartProduct key={key} product={{ id: key, ...product }} />
      ))}
      <p className="cart__total">
        Total:{' '}
        <span className="primary-color">
          {cartTotal.toLocaleString(DEFAULT_LOCALE, DEFAULT_CURRENCY_FORMAT)}
        </span>
      </p>
    </div>
  );
};

export default CartPage;
