import { ReactElement, JSXElementConstructor } from "react";

export interface ImageType {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  source: string;
}

export interface PostType {
  id: number;
  slug: string;
  title: string;
  datetime: Date | string;
  category: {
    title: string;
    href: string;
  };
  thumbnail: string;
  summary: string;
  content: string | ReactElement<any, string | JSXElementConstructor<any>>;
}