export interface IProduct {
  title: string;
  image: string;
  description: string;
  price: number;
}

export interface ICatalogState {
  readonly products: Record<string, IProduct>;
  readonly loading: boolean;
  readonly error: string | null;
}
