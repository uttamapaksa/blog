import { ImageType } from "./types";

export const images: Record<string, ImageType> = {
  books: {
    id: 1,
    name: 'Books',
    href: 'books',
    imageSrc: 'https://images.unsplash.com/photo-1529473814998-077b4fec6770?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Books menu image',
    source: 'https://unsplash.com/photos/wooden-bookcase-filled-with-books-D4YrzSwyIEc',
  },
  react: {
    id: 2,
    name: 'React',
    href: 'react',
    imageSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'React menu image',
    source: 'https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-xkBaqlcqeb4',
  },
  algorithm: {
    id: 3,
    name: 'Algorithm',
    href: 'algorithm',
    imageSrc: 'https://images.unsplash.com/photo-1631745594878-9088e5384ea0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Algorithm menu image',
    source: 'https://unsplash.com/photos/a-bunch-of-light-bulbs-hanging-from-a-tree-Goy1rUgU05I',
  },
  cs: {
    id: 4,
    name: 'CS',
    href: 'cs',
    imageSrc: 'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'CS menu image',
    source: 'https://unsplash.com/photos/astronaut-on-lunar-rover-Ed2AELHKYB',
  },
  notFound: {
    id: 5,
    name: 'NotFound',
    imageSrc: 'https://images.unsplash.com/photo-1617962091173-049f427ee863?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: '404 Not Found background image',
    source: 'https://unsplash.com/photos/man-in-blue-shirt-and-black-pants-standing-on-water-during-daytime-Mv4r82sR-dA',
  },
};
