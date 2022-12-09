
export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  photo: string[];
  tooltip?: {
    title: string;
    color: string;
    active: boolean
  };
}