import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { menuParams } from '@/lib/constants/params';
import { menus } from '@/lib/constants/paths';
import { formatDateString } from '@/lib/utils/dates';
import { getCategories, getPosts } from '@/lib/utils/posts';
import Category from '@/components/category';

export function generateStaticParams() {
  return menuParams
}

export default async function MenuPage({ params }: { params: Promise<{ menu: string }> }) {
  const { menu } = await params;
  const currMenu = menus[menu]
  const posts = await getPosts(menu);
  if (posts === null) notFound();
  const categories = ['All', ...await getCategories(menu) ?? []];

  return (
    <>
      <header data-mode="dark" className="relative h-48">
        <Image src={currMenu.imageSrc} alt={currMenu.imageAlt} fill className="object-cover object-center" loading="eager" />
      </header>
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <section className="ps-2 pb-6 sm:pb-8 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">{currMenu.title}</h2>
        </section>
        <section className='flex'>
          {categories.map(category => (
            <div key={category} className="flex items-center mt-6 gap-x-4 text-xs">
              <Category href={'#'} title={category} />
            </div>
          ))}
        </section>
        <section className="mx-auto mt-12 px-1 max-w-2xl min-w-60 grid grid-cols-1 gap-x-12 gap-y-16 md:mt-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {posts.map(post => (
            <Link key={post.id} href={`${menu}/${post.slug}`} className="group mx-auto max-w-xl w-full flex flex-col items-start">
              <div className="relative w-full h-56">
                <Image src={post.thumbnail} alt="post image" fill className="object-cover object-center group-hover:opacity-80" />
              </div>
              <div className="flex items-center mt-6 gap-x-4 text-xs">
                <time className="text-gray-500 round-">{formatDateString(post.datetime)}</time>
                <Category href={post.category.href} title={post.category.title} />
              </div>
              <h3 className="mt-3  line-clamp-2 text-lg/6 font-semibold tracking-tight group-hover:text-gray-400">{post.title}</h3>
              <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600 sm:pe-20 md:pe-0 dark:text-gray-300 group-hover:text-gray-400">{post.summary}</div>
            </Link>
          ))}
        </section>
      </main>
      </>
    );
}
