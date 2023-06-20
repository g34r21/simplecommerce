import type { IProduct } from './catalog';

export interface ICartProduct extends IProduct {
  quantity: number;
  subtotal: number;
}

export interface ICartState {
  readonly products: Record<string, ICartProduct>;
  readonly total: number;
  readonly loading: boolean;
  readonly error: string | null;
}
