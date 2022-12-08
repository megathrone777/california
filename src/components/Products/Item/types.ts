export interface TProduct {
  id: string | number;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

export type TProps = TProduct;