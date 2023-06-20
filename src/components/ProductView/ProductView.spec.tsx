import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { expect } from 'vitest';

import { DEFAULT_CURRENCY_FORMAT, DEFAULT_LOCALE } from '~/constants';
import { rootReducer } from '~/store';
import type { IProduct } from '~/types/catalog';

import ProductView from '.';

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

describe('ProductView', () => {
  const { title, image, description, price } = {
    title: 'Foo',
    price: 12.5,
    description: 'dummy description',
    image: '',
  };
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
        <ProductView productId="product-1" />
      </Provider>
    );
  });
  test('should display product title', () => {
    expect(screen.getByTestId('title')).toHaveTextContent(title);
  });
  test('should display product image', () => {
    expect(screen.getByTestId('image')).toHaveAttribute('src', image);
    expect(screen.getByTestId('image')).toHaveAttribute('alt', title);
  });
  test('should display product description', () => {
    expect(screen.getByTestId('description')).toHaveTextContent(description);
  });
  test('should display formatted product price', () => {
    const formattedPrice = price.toLocaleString(
      DEFAULT_LOCALE,
      DEFAULT_CURRENCY_FORMAT
    );
    expect(screen.getByTestId('price')).toHaveTextContent(formattedPrice);
  });
});
