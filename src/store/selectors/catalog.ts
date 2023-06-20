import type { ICatalogState, IProduct } from '~/types/catalog';

import type { RootState } from '..';

export const getProducts = (state: RootState): ICatalogState['products'] =>
  state.catalog.products;

export const getProductById =
  (id?: string) =>
  (state: RootState): IProduct | null =>
    (id && state.catalog.products[id]) || null;

export const getCatalogError = (state: RootState): ICatalogState['error'] =>
  state.catalog.error;

export const getCatalogIsLoading = (
  state: RootState
): ICatalogState['loading'] => state.catalog.loading;
