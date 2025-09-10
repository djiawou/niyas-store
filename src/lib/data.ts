import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Abaya Élégance Noire & Or',
    category: 'Veils & Abayas',
    price: 89.99,
    imageUrl: 'https://picsum.photos/seed/p1/400/500',
    newArrival: true,
  },
  {
    id: 'prod-002',
    name: 'Qamis Prestige Blanc & Broderie Dorée',
    category: 'Men',
    price: 75.0,
    imageUrl: 'https://picsum.photos/seed/p2/400/500',
    newArrival: true,
  },
  {
    id: 'prod-003',
    name: 'Voile en Soie de Médine "Nuit Étoilée"',
    category: 'Veils & Abayas',
    price: 29.99,
    imageUrl: 'https://picsum.photos/seed/p3/400/500',
    newArrival: true,
  },
  {
    id: 'prod-004',
    name: 'Robe Pagne Enfant "Princesse Ashanti"',
    category: 'Kids',
    price: 49.5,
    imageUrl: 'https://picsum.photos/seed/p4/400/500',
    newArrival: true,
  },
  {
    id: 'prod-005',
    name: 'Ensemble Pagne "Reine de Saba"',
    category: 'Women',
    price: 99.99,
    imageUrl: 'https://picsum.photos/seed/p5/400/500',
  },
  {
    id: 'prod-006',
    name: 'Chapelet de Prière "Lumière d\'Ambre"',
    category: 'Accessories',
    price: 18.0,
    imageUrl: 'https://picsum.photos/seed/p6/400/500',
  },
  {
    id: 'prod-007',
    name: 'Kufi Royal Brodé Or',
    category: 'Men',
    price: 22.99,
    imageUrl: 'https://picsum.photos/seed/p7/400/500',
  },
  {
    id: 'prod-008',
    name: 'Chemise Pagne "Le Lion de Kemet"',
    category: 'Men',
    price: 40.0,
    imageUrl: 'https://picsum.photos/seed/p8/400/500',
  },
  {
    id: 'prod-009',
    name: 'Tunique en Lin "Oasis Dorée"',
    category: 'Women',
    price: 65.0,
    imageUrl: 'https://picsum.photos/seed/p9/400/500',
  },
  {
    id: 'prod-010',
    name: 'Khimar "Sérénité du Désert"',
    category: 'Veils & Abayas',
    price: 59.99,
    imageUrl: 'https://picsum.photos/seed/p10/400/500',
  },
  {
    id: 'prod-011',
    name: 'Babouches en Cuir "Sultan"',
    category: 'Men',
    price: 69.99,
    imageUrl: 'https://picsum.photos/seed/p11/400/500',
  },
  {
    id: 'prod-012',
    name: 'Collier Pagne "Trésor du Mali"',
    category: 'Accessories',
    price: 45.99,
    imageUrl: 'https://picsum.photos/seed/p12/400/500',
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
