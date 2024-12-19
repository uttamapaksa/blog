import Link from 'next/link';
import Image from 'next/image';
import { menus } from '@/lib/constants/paths';

export default function NotFound() {
  return (
    <div className="relative h-[85vh]">
      <Image src={menus.notFound.imageSrc} alt="not found page image" fill className='object-cover object-center' />
      <main className="relative px-6 py-14 text-center sm:py-16">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
