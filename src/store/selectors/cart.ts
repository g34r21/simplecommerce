import type { ICartProduct, ICartState } from '~/types/cart';

import type { RootState } from '..';

export const getCartTotal = (state: RootState): ICartState['total'] =>
  state.cart.total;

export const getCartIsLoading = (state: RootState): ICartState['loading'] =>
  state.cart.loading;

export const getCartProducts = (state: RootState): ICartState['products'] =>
  state.cart.products;

export const getCartProductById =
  (id?: string) =>
  (state: RootState): ICartProduct | null =>
    (id && state.cart.products[id]) || null;
