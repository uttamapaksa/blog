import { menus } from '@/lib/constants/paths';

export const menuParams = [
  { menu: 'book' },
  { menu: 'algorithm' },
  // { menu: 'react' },
  { menu: 'cs' },
  { menu: 'error' }
];

export const menuSlugParams = [
  { menu: 'algorithm', slug: 'graph' },
  { menu: 'algorithm', slug: 'sort' },
  { menu: 'algorithm', slug: 'string-searching' },
  { menu: 'book', slug: 'core-javascript' },
  { menu: 'book', slug: 'lonely-crowd' },
  { menu: 'book', slug: 'on-love' },
  { menu: 'book', slug: 'way-of-working' },
  { menu: 'book', slug: 'self-learning-cs' },
  { menu: 'book', slug: 'saynos-lessons' },
  { menu: 'book', slug: 'self-learning-network' },
  { menu: 'book', slug: 'dont-make-me-think' },
  { menu: 'book', slug: 'design-of-everyday-things' },
  { menu: 'book', slug: 'walden' },
  { menu: 'book', slug: 'icarus-deception' },
  { menu: 'book', slug: 'richest-man-in-babylon' },
  { menu: 'book', slug: 'linchpin' },
  { menu: 'error', slug: 'nextjs-blog' },
];

export const homeMenus = [
  menus.book, 
  menus.algorithm,
  // menus.react,
  menus.cs,
  menus.playground,
  menus.error,
];

export const navigations = [
  menus.home,
  menus.book,
  menus.algorithm,
  // menus.react,
  // menus.cs,
  menus.playground,
  menus.error,
  menus.category,
];
