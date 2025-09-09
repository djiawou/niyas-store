import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Abaya Élégante en Soie',
    category: 'Veils & Abayas',
    price: 89.99,
    imageUrl: 'https://picsum.photos/400/500?random=1',
    newArrival: true,
  },
  {
    id: 'prod-002',
    name: 'Qamis Traditionnel en Lin',
    category: 'Men',
    price: 75.0,
    imageUrl: 'https://picsum.photos/400/500?random=2',
    newArrival: true,
  },
  {
    id: 'prod-003',
    name: 'Hijab en Mousseline',
    category: 'Veils & Abayas',
    price: 29.99,
    imageUrl: 'https://picsum.photos/400/500?random=3',
    newArrival: true,
  },
  {
    id: 'prod-004',
    name: 'Robe Pagne pour Fille',
    category: 'Kids',
    price: 49.5,
    imageUrl: 'https://picsum.photos/400/500?random=4',
    newArrival: true,
  },
  {
    id: 'prod-005',
    name: 'Robe Maxi Pagne',
    category: 'Women',
    price: 99.99,
    imageUrl: 'https://picsum.photos/400/500?random=5',
  },
  {
    id: 'prod-006',
    name: 'Chapelet de Prière (Tasbih)',
    category: 'Accessories',
    price: 18.0,
    imageUrl: 'https://picsum.photos/400/500?random=6',
  },
  {
    id: 'prod-007',
    name: 'Kufi Brodé',
    category: 'Men',
    price: 22.99,
    imageUrl: 'https://picsum.photos/400/500?random=7',
  },
  {
    id: 'prod-008',
    name: 'Ensemble Pagne Garçon',
    category: 'Kids',
    price: 40.0,
    imageUrl: 'https://picsum.photos/400/500?random=8',
  },
  {
    id: 'prod-009',
    name: 'Tunique ample en Coton',
    category: 'Women',
    price: 65.0,
    imageUrl: 'https://picsum.photos/400/500?random=9',
  },
  {
    id: 'prod-010',
    name: 'Khimar Classique Noir',
    category: 'Veils & Abayas',
    price: 59.99,
    imageUrl: 'https://picsum.photos/400/500?random=10',
  },
  {
    id: 'prod-011',
    name: 'Sandales en Cuir',
    category: 'Men',
    price: 69.99,
    imageUrl: 'https://picsum.photos/400/500?random=11',
  },
  {
    id: 'prod-012',
    name: 'Collier Calligraphie Arabe',
    category: 'Accessories',
    price: 45.99,
    imageUrl: 'https://picsum.photos/400/500?random=12',
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
