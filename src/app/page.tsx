import Link from 'next/link';
import Image from 'next/image';
import { homeMenus } from '@/lib/constants/menus';

const Acativate = ['Home', 'Book', 'Algorithm', 'Playground', 'Error', 'Category']

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-12 pb-24 sm:pt-16 lg:max-w-7xl lg:px-12">
      <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        {homeMenus.map((menu) => {
          if (Acativate.includes(menu.name)) {
            return (
            <Link key={menu.id} href={menu.href} className="group rounded-md shadow-lg overflow-hidden">
              <div className="relative h-64 group-hover:opacity-75">
                <Image src={menu.imageSrc} alt={menu.imageAlt} fill className="object-cover object-center" loading="eager" />
                {/* <img src={menu.imageSrc} alt={menu.imageAlt} className="h-full w-full object-cover object-center" /> */}
              </div>
              <div className="bg-white py-3 flex justify-center items-center text-lg font-bold tracking-tight text-gray-800 group-hover:opacity-75">
                {menu.title}
              </div>
            </Link>
            )
          }
          return (
            <div key={menu.id} className="relative rounded-md shadow-lg overflow-hidden">
              <div className='absolute inset-0 flex justify-center items-center z-10'>
                <span className="text-xl font-bold">Coming Soon</span>
              </div>
              <div className="opacity-25 relative h-64">
                <Image src={menu.imageSrc} alt={menu.imageAlt} fill className="object-cover object-center" loading="eager" />
              </div>
              <div className="opacity-25 bg-white py-3 flex justify-center items-center text-lg font-bold tracking-tight text-gray-800">
                {menu.title}
              </div>
           </div>
          )
        })}
      </div>
    </div>
  );
}
