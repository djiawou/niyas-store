import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Abaya Élégance Noire',
    category: 'Veils & Abayas',
    price: 89.99,
    imageUrl: 'https://picsum.photos/id/102/400/500',
    newArrival: true,
  },
  {
    id: 'prod-002',
    name: 'Qamis Traditionnel Blanc',
    category: 'Men',
    price: 75.0,
    imageUrl: 'https://picsum.photos/id/211/400/500',
    newArrival: true,
  },
  {
    id: 'prod-003',
    name: 'Voile en Soie de Médine',
    category: 'Veils & Abayas',
    price: 29.99,
    imageUrl: 'https://picsum.photos/id/1074/400/500',
    newArrival: true,
  },
  {
    id: 'prod-004',
    name: 'Robe Pagne "Soleil d\'Afrique"',
    category: 'Kids',
    price: 49.5,
    imageUrl: 'https://picsum.photos/id/342/400/500',
    newArrival: true,
  },
  {
    id: 'prod-005',
    name: 'Ensemble Pagne & Top',
    category: 'Women',
    price: 99.99,
    imageUrl: 'https://picsum.photos/id/367/400/500',
  },
  {
    id: 'prod-006',
    name: 'Chapelet de Prière en Bois d\'Olivier',
    category: 'Accessories',
    price: 18.0,
    imageUrl: 'https://picsum.photos/id/431/400/500',
  },
  {
    id: 'prod-007',
    name: 'Kufi Brodé Or',
    category: 'Men',
    price: 22.99,
    imageUrl: 'https://picsum.photos/id/479/400/500',
  },
  {
    id: 'prod-008',
    name: 'Chemise Pagne "Léopard"',
    category: 'Men',
    price: 40.0,
    imageUrl: 'https://picsum.photos/id/500/400/500',
  },
  {
    id: 'prod-009',
    name: 'Tunique Ample en Lin',
    category: 'Women',
    price: 65.0,
    imageUrl: 'https://picsum.photos/id/510/400/500',
  },
  {
    id: 'prod-010',
    name: 'Khimar Long "Douceur"',
    category: 'Veils & Abayas',
    price: 59.99,
    imageUrl: 'https://picsum.photos/id/659/400/500',
  },
  {
    id: 'prod-011',
    name: 'Babouches en Cuir Marron',
    category: 'Men',
    price: 69.99,
    imageUrl: 'https://picsum.photos/id/77/400/500',
  },
  {
    id: 'prod-012',
    name: 'Collier Pagne et Perles',
    category: 'Accessories',
    price: 45.99,
    imageUrl: 'https://picsum.photos/id/988/400/500',
  },
];

export const newArrivals = products.filter(p => p.newArrival);

export const categories: Product['category'][] = [
  'Men',
  'Women',
  'Kids',
  'Veils & Abayas',
  'Accessories',
];
