export type Product = {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Kids' | 'Veils & Abayas' | 'Accessories';
  price: number;
  imageUrl: string;
  newArrival?: boolean;
};
