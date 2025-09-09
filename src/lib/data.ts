import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Elegant Abaya',
    category: 'Veils & Abayas',
    price: 79.99,
    imageUrl: 'https://picsum.photos/400/500?random=1',
    newArrival: true,
  },
  {
    id: 'prod-002',
    name: 'Linen Thobe',
    category: 'Men',
    price: 65.0,
    imageUrl: 'https://picsum.photos/400/500?random=2',
    newArrival: true,
  },
  {
    id: 'prod-003',
    name: 'Silk Hijab',
    category: 'Veils & Abayas',
    price: 24.99,
    imageUrl: 'https://picsum.photos/400/500?random=3',
    newArrival: true,
  },
  {
    id: 'prod-004',
    name: 'Girls Floral Dress',
    category: 'Kids',
    price: 45.5,
    imageUrl: 'https://picsum.photos/400/500?random=4',
    newArrival: true,
  },
  {
    id: 'prod-005',
    name: 'Modest Maxi Dress',
    category: 'Women',
    price: 89.99,
    imageUrl: 'https://picsum.photos/400/500?random=5',
  },
  {
    id: 'prod-006',
    name: 'Prayer Beads',
    category: 'Accessories',
    price: 15.0,
    imageUrl: 'https://picsum.photos/400/500?random=6',
  },
  {
    id: 'prod-007',
    name: 'Embroidered Kufi',
    category: 'Men',
    price: 19.99,
    imageUrl: 'https://picsum.photos/400/500?random=7',
  },
  {
    id: 'prod-008',
    name: 'Boys Jubba',
    category: 'Kids',
    price: 35.0,
    imageUrl: 'https://picsum.photos/400/500?random=8',
  },
  {
    id: 'prod-009',
    name: 'Flowy Tunic Top',
    category: 'Women',
    price: 55.0,
    imageUrl: 'https://picsum.photos/400/500?random=9',
  },
  {
    id: 'prod-010',
    name: 'Classic Black Khimar',
    category: 'Veils & Abayas',
    price: 49.99,
    imageUrl: 'https://picsum.photos/400/500?random=10',
  },
  {
    id: 'prod-011',
    name: 'Leather Sandals',
    category: 'Men',
    price: 59.99,
    imageUrl: 'https://picsum.photos/400/500?random=11',
  },
  {
    id: 'prod-012',
    name: 'Calligraphy Necklace',
    category: 'Accessories',
    price: 39.99,
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
