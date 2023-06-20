import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { DEFAULT_CURRENCY_FORMAT, DEFAULT_LOCALE } from '~/constants';

import ProductCard from '.';

describe('ProductCard', () => {
  const { title, price, image, description } = {
    title: 'Foo',
    price: 12.5,
    image: '',
    description: 'dummy description',
  };

  beforeEach(() => {
    render(
      <ProductCard
        title={title}
        price={price}
        description={description}
        image={image}
      />
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
