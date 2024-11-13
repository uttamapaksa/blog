import type { ImageType } from "./types";

export const images: Record<string, ImageType> = {
  books: {
    id: 1,
    name: 'Books',
    href: 'books',
    imageSrc: 'https://images.unsplash.com/photo-1529473814998-077b4fec6770',
    imageAlt: 'Books menu image',
    source: 'https://unsplash.com/photos/wooden-bookcase-filled-with-books-D4YrzSwyIEc',
  },
  react: {
    id: 2,
    name: 'React',
    href: 'react',
    imageSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    imageAlt: 'React menu image',
    source: 'https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-xkBaqlcqeb4',
  },
  algorithm: {
    id: 3,
    name: 'Algorithm',
    href: 'algorithm',
    imageSrc: 'https://images.unsplash.com/photo-1631745594878-9088e5384ea0',
    imageAlt: 'Algorithm menu image',
    source: 'https://unsplash.com/photos/a-bunch-of-light-bulbs-hanging-from-a-tree-Goy1rUgU05I',
  },
  cs: {
    id: 4,
    name: 'CS',
    href: 'cs',
    imageSrc: 'https://images.unsplash.com/photo-1614315517650-3771cf72d18a',
    imageAlt: 'CS menu image',
    source: 'https://unsplash.com/photos/astronaut-on-lunar-rover-Ed2AELHKYB',
  },
  notFound: {
    id: 5,
    name: 'NotFound',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1617962091173-049f427ee863',
    imageAlt: '404 Not Found background image',
    source: 'https://unsplash.com/photos/man-in-blue-shirt-and-black-pants-standing-on-water-during-daytime-Mv4r82sR-dA',
  },
};
