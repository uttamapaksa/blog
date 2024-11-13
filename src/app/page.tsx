import Link from 'next/link';
import Image from 'next/image';
import type { ImageType } from '../lib/constants/types';
import { images } from '../lib/constants/images';

const menus = [images.books, images.react, images.algorithm, images.cs];

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-6 pt-12 pb-24 sm:pt-16 lg:max-w-7xl lg:px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
          {menus.map((menu: ImageType, index: number) => (
            <Link key={index} href={menu.href} className="bg-white group rounded-md shadow-lg">
              <div className="relative h-64 group-hover:opacity-75">
                <Image src={menu.imageSrc} alt={menu.imageAlt} fill className="object-cover object-center" loading="eager" />
                {/* <img src={menu.imageSrc} alt={menu.imageAlt} className="h-full w-full object-cover object-center" /> */}
              </div>
              <div className="my-3 flex justify-center items-center text-lg font-bold tracking-tight text-gray-800 group-hover:opacity-75">
                {menu.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
