import type { MenuType } from "./types";
import { BookMenuImg, AlgorithmMenuImg, CSMenuImg, PlaygroundMenuImg, ErrorMenuImg, NotFoundMenuImg } from "public/menus"


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
  book: {
    id: 2,
    name: 'Book',
    title: 'Book',
    href: '/book',
    imageSrc: BookMenuImg,
    imageAlt: 'book menu image',
    source: 'https://unsplash.com/photos/wooden-bookcase-filled-with-books-D4YrzSwyIEc',
  },
  // react: {
  //   id: 3,
  //   name: 'React',
  //   title: 'React',
  //   href: '/react',
  //   imageSrc: ReactMenuImg,
  //   imageAlt: 'react menu image',
  //   source: 'https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-xkBaqlcqeb4',
  // },
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
    source: 'https://unsplash.com/photos/nasa-astronaut-performs-extravehicular-activity-gYwfpVI2JzM',
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
  error: {
    id: 7,
    name: 'Error',
    title: 'Error History',
    href: '/error',
    imageSrc: ErrorMenuImg,
    imageAlt: 'error menu image',
    source: 'https://unsplash.com/photos/person-knitting-beige-garment-cqIygVsfrgM',
  },
  category: {
    id: 8,
    name: 'Category',
    title: '# Category',
    href: '/category',
    imageSrc: '',
    imageAlt: 'category menu image',
    source: '',
  },
  notFound: {
    id: 9,
    name: 'NotFound',
    title: '404 Not Found',
    href: '#',
    imageSrc: NotFoundMenuImg,
    imageAlt: '404 not found background image',
    source: 'https://unsplash.com/photos/man-in-blue-shirt-and-black-pants-standing-on-water-during-daytime-Mv4r82sR-dA',
  },
};


export const homeMenus = [
  menus.error,
  menus.book, 
  menus.cs,
  menus.algorithm,
  menus.playground,
];


export const navigations = [
  menus.home,
  menus.error,
  menus.book,
  menus.cs,
  menus.algorithm,
  menus.playground,
  menus.category,
];
