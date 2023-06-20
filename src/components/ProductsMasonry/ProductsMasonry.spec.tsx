import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { rootReducer } from '~/store';
import type { IProduct } from '~/types/catalog';

import ProductsMasonry from '.';

const productsData: Record<string, IProduct> = {
  'product-1': {
    title: 'Foo',
    price: 12.5,
    description: 'dummy description',
    image: '',
  },
  'product-2': {
    title: 'bar',
    price: 25,
    description: 'dummy description',
    image: '',
  },
};

describe('ProductsMasonry', () => {
  beforeEach(() => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        catalog: {
          products: productsData,
          loading: false,
          error: null,
        },
      },
    });
    render(
      <Provider store={store}>
        <ProductsMasonry />
      </Provider>
    );
  });

  test('should render all products in store', () => {
    const productsLength = Object.entries(productsData).length;
    expect(screen.getAllByTestId('productContainer')).toHaveLength(
      productsLength
    );
  });

  test('should render all products image properly', () => {
    screen.getAllByTestId('productImage').forEach((image) => {
      expect(image).toHaveAttribute('src');
      expect(image).toHaveAttribute('alt');
    });
  });
});
