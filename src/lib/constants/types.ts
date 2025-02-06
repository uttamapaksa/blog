import React, { ReactElement, JSXElementConstructor } from "react";
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
  menu: string,
  slug: string;
  title: string;
  datetime: Date | string;
  category: string;
  thumbnail: string;
  source: string;
  summary: string;
  link?: string;
  content: string | ReactElement<any, string | JSXElementConstructor<any>>;
}

export interface PlaygroundNodeType {
  component: React.FunctionComponent;
  slug: string;
  title: string;
  childrenSlug: string[];
}