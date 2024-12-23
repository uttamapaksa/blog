import type { MenuType } from "./types";
import { BooksMenuImg, ReactMenuImg, AlgorithmMenuImg, CSMenuImg, PlaygroundMenuImg, ErrorsMenuImg, NotFoundMenuImg } from "public/menus"

export const menus: Record<string, MenuType> = {
  home: {  // url, directory
    id: 1,
    name: 'Home',  // navigation
    title: 'Home',  // home page, menu page
    href: '/',  // url, directory
    imageSrc: '',
    imageAlt: 'home menu image',
    source: '',
  },
  books: {
    id: 2,
    name: 'Books',
    title: 'Books',
    href: '/books',
    imageSrc: BooksMenuImg,
    imageAlt: 'books menu image',
    source: 'https://unsplash.com/photos/wooden-bookcase-filled-with-books-D4YrzSwyIEc',
  },
  react: {
    id: 3,
    name: 'React',
    title: 'React',
    href: '/react',
    imageSrc: ReactMenuImg,
    imageAlt: 'react menu image',
    source: 'https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-xkBaqlcqeb4',
  },
  algorithm: {
    id: 4,
    name: 'Algorithm',
    title: 'Algorithm',
    href: '/algorithm',
    imageSrc: AlgorithmMenuImg,
    imageAlt: 'algorithm menu image',
    source: 'https://unsplash.com/photos/a-bunch-of-light-bulbs-hanging-from-a-tree-Goy1rUgU05I',
  },
  cs: {
    id: 5,
    name: 'CS',
    title: 'Computer Science',
    href: '/cs',
    imageSrc: CSMenuImg,
    imageAlt: 'cs menu image',
    source: 'https://unsplash.com/photos/astronaut-on-lunar-rover-Ed2AELHKYBw',
  },
  playground: {
    id: 6,
    name: 'Playground',
    title: 'Playground',
    href: '/playground',
    imageSrc: PlaygroundMenuImg,
    imageAlt: 'playground menu image',
    source: 'https://unsplash.com/photos/girl-on-slide-_NLLnuZyuXA',
  },  
  errors: {
    id: 7,
    name: 'Errors',
    title: 'Error History',
    href: '/errors',
    imageSrc: ErrorsMenuImg,
    imageAlt: 'errors menu image',
    source: 'https://unsplash.com/photos/person-knitting-beige-garment-cqIygVsfrgM',
  },
  notFound: {
    id: 8,
    name: 'NotFound',
    title: '404 Not Found',
    href: '#',
    imageSrc: NotFoundMenuImg,
    imageAlt: '404 not found background image',
    source: 'https://unsplash.com/photos/man-in-blue-shirt-and-black-pants-standing-on-water-during-daytime-Mv4r82sR-dA',
  },
};
