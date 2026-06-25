import type { IProductBrief } from './types';

export const MOCK_PRODUCTS: IProductBrief[] = [
  {
    id: '1-01',
    title: 'Apple iPhone 15 Pro Max',
    price: 48000,
    discountPrice: 45000,
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
    description: 'Флагманський смартфон у титановому корпусі з революційним процесором A17 Pro та професійною системою камер.',
    rating: 4.9,
    isAvailable: true
  },
  {
    id: '1-02',
    title: 'Samsung Galaxy S24 Ultra 5G Enterprise Edition Titanium Gray with Special Advanced AI Features and Extended Warranty',
    price: 46000,
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    isAvailable: true
  },
  {
    id: '1-03',
    title: 'Google Pixel 8 Pro',
    price: 38000,
    discountPrice: 35500,
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
    description: 'Чистий Android від Google з передовими алгоритмами штучного інтелекту для обробки фото та відео.',
    isAvailable: true
  },
  {
    id: '1-04',
    title: 'Xiaomi 14 Ultra',
    price: 42000,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
    description: 'Суперфлагман з унікальною оптикою від легендарного бренду Leica, великим сенсором та надшвидкою зарядкою 90 Вт. Також він оснащений неймовірним WQHD+ екраном з частотою оновлення 120 Гц, інноваційними функціями штучного інтелекту для обробки зображень та надзвичайно міцним склом Xiaomi Shield Glass.'
  },
  {
    id: '1-05',
    title: 'OnePlus 12 5G',
    price: 33000,
    discountPrice: 31000,
    imageUrl: 'https://images.unsplash.com/photo-1565849906461-096573c7a140?w=600&auto=format&fit=crop&q=80',
    isAvailable: true
  },
  {
    id: '1-06',
    title: 'Asus ROG Phone 8',
    price: 45000,
    discountPrice: 43000,
    imageUrl: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&auto=format&fit=crop&q=80',
    description: 'Екстремальний ігровий смартфон із вбудованими тригерами, RGB-підсвіткою та передовою системою охолодження.',
    rating: 4.7
  },
  {
    id: '1-07',
    title: 'Motorola Edge 50 Ultra',
    price: 34000,
    imageUrl: 'https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=600&auto=format&fit=crop&q=80',
    rating: 4.5,
    isAvailable: false
  },
  {
    id: '1-08',
    title: 'Nothing Phone (2)',
    price: 28000,
    imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
    description: 'Концептуальний смартфон із напівпрозорою спинкою, світлодіодним підсвічуванням Glyph та чистим інтерфейсом OS.',
    rating: 4.6,
    isAvailable: true
  },
  {
    id: '1-09',
    title: 'Apple iPhone SE (2022)',
    price: 19000,
    discountPrice: 17500,
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&auto=format&fit=crop&q=80',
    description: 'Компактний смартфон з перевіреним часом дизайном, кнопкою Home з Touch ID та потужним чіпом A15 Bionic.',
    isAvailable: false
  },
  {
    id: '1-10',
    title: 'Samsung Galaxy A55 5G',
    price: 16000,
    imageUrl: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80'
  }
];
