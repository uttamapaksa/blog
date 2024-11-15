import type { MenuType } from "./types";
import { Books, React, Algorithm, CS, NotFound } from "public/menus"

export const menus: Record<string, MenuType> = {
  home: {
    id: 1,
    name: 'Home',
    title: 'Home',
    href: '/',
    imageSrc: '',
    imageAlt: 'home menu image',
    source: '',
  },
  books: {
    id: 2,
    name: 'Books',
    title: 'Books',
    href: '/books',
    imageSrc: Books,
    imageAlt: 'books menu image',
    source: 'https://unsplash.com/photos/wooden-bookcase-filled-with-books-D4YrzSwyIEc',
  },
  react: {
    id: 3,
    name: 'React',
    title: 'React',
    href: '/react',
    imageSrc: React,
    imageAlt: 'react menu image',
    source: 'https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-xkBaqlcqeb4',
  },
  algorithm: {
    id: 4,
    name: 'Algorithm',
    title: 'Algorithm',
    href: '/algorithm',
    imageSrc: Algorithm,
    imageAlt: 'algorithm menu image',
    source: 'https://unsplash.com/photos/a-bunch-of-light-bulbs-hanging-from-a-tree-Goy1rUgU05I',
  },
  cs: {
    id: 5,
    name: 'CS',
    title: 'Computer Science',
    href: '/cs',
    imageSrc: CS,
    imageAlt: 'cs menu image',
    source: 'https://unsplash.com/photos/astronaut-on-lunar-rover-Ed2AELHKYBw',
  },
  notFound: {
    id: 6,
    name: 'NotFound',
    title: '404 Not Found',
    href: '/#',
    imageSrc: NotFound,
    imageAlt: '404 not found background image',
    source: 'https://unsplash.com/photos/man-in-blue-shirt-and-black-pants-standing-on-water-during-daytime-Mv4r82sR-dA',
  },
};
