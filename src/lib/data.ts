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
    imageUrl: 'https://picsum.photos/id/111/400/500',
    newArrival: true,
  },
  {
    id: 'prod-003',
    name: 'Voile en Soie de Médine',
    category: 'Veils & Abayas',
    price: 29.99,
    imageUrl: 'https://picsum.photos/id/212/400/500',
    newArrival: true,
  },
  {
    id: 'prod-004',
    name: 'Robe Pagne "Soleil d\'Afrique"',
    category: 'Kids',
    price: 49.5,
    imageUrl: 'https://picsum.photos/id/234/400/500',
    newArrival: true,
  },
  {
    id: 'prod-005',
    name: 'Ensemble Pagne & Top "Wax"',
    category: 'Women',
    price: 99.99,
    imageUrl: 'https://picsum.photos/id/321/400/500',
  },
  {
    id: 'prod-006',
    name: 'Chapelet de Prière en Bois d\'Olivier',
    category: 'Accessories',
    price: 18.0,
    imageUrl: 'https://picsum.photos/id/345/400/500',
  },
  {
    id: 'prod-007',
    name: 'Kufi Brodé Or',
    category: 'Men',
    price: 22.99,
    imageUrl: 'https://picsum.photos/id/456/400/500',
  },
  {
    id: 'prod-008',
    name: 'Chemise Pagne "Lagos"',
    category: 'Men',
    price: 40.0,
    imageUrl: 'https://picsum.photos/id/567/400/500',
  },
  {
    id: 'prod-009',
    name: 'Tunique Ample en Lin "Sahara"',
    category: 'Women',
    price: 65.0,
    imageUrl: 'https://picsum.photos/id/678/400/500',
  },
  {
    id: 'prod-010',
    name: 'Khimar Long "Douceur"',
    category: 'Veils & Abayas',
    price: 59.99,
    imageUrl: 'https://picsum.photos/id/789/400/500',
  },
  {
    id: 'prod-011',
    name: 'Babouches en Cuir "Marrakech"',
    category: 'Men',
    price: 69.99,
    imageUrl: 'https://picsum.photos/id/890/400/500',
  },
  {
    id: 'prod-012',
    name: 'Collier Pagne et Perles "Kenya"',
    category: 'Accessories',
    price: 45.99,
    imageUrl: 'https://picsum.photos/id/901/400/500',
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
