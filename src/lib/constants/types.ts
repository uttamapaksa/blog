export interface ImageType {
  id: number;
  name: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  source: string;
}

export interface PostType {
  id: number;
  slug: string;
  title: string;
  datetime: Date;
  category: {
    title: string;
    href: string;
  };
  thumbnail: string;
  content: string;
}