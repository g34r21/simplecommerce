import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ICartState } from '~/types/cart';

export interface IUpdateCartProductQuantity {
  productId: string;
  newQuantity: number;
}

export const initialState: ICartState = {
  loading: false,
  products: {},
  total: 0,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseCartProductQuantity: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    decreaseCartProductQuantity: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    addProductToCart: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    removeProductFromCart: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    updateCartProductQuantity: (
      state,
      _action: PayloadAction<IUpdateCartProductQuantity>
    ) => {
      state.loading = true;
    },
    updateCartSuccess: (
      state,
      action: PayloadAction<Omit<ICartState, 'loading' | 'error'>>
    ) => {
      state.loading = false;
      state.total = action.payload.total;
      state.products = action.payload.products;
    },
    updateCartError: (state, action: PayloadAction<ICartState['error']>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
  addProductToCart,
  removeProductFromCart,
  updateCartSuccess,
  updateCartError,
  updateCartProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
