import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ICatalogState } from '~/types/catalog';

export const initialState: ICatalogState = {
  products: {},
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    loadProducts: (state) => {
      state.loading = true;
    },
    loadProductsSuccess: (
      state,
      action: PayloadAction<ICatalogState['products']>
    ) => {
      state.products = action.payload;
      state.loading = true;
    },
    loadProductsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = true;
    },
  },
});

export const { loadProducts, loadProductsSuccess, loadProductsError } =
  catalogSlice.actions;

export default catalogSlice.reducer;
