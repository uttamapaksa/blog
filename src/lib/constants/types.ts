import { ReactElement, JSXElementConstructor } from "react";
import { StaticImageData } from "next/image";

export interface MenuType {
  id: number;
  name: string;
  title: string;
  href: string;
  imageSrc: StaticImageData | string;
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