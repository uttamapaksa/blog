import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { PostType } from '@/lib/constants/types';
import { images } from '@/lib/constants/images';
import { formatDateString } from '@/lib/utils/dates';
import { getPosts } from '@/lib/utils/posts';

const menuNames = {
  books: 'Books',
  algorithm: 'Algorithm',
  react: 'React',
  cs: 'Computer Science'
}

export function generateStaticParams() {
  return [
    { menu: 'books' },
    { menu: 'algorithm' },
    { menu: 'react' },
    { menu: 'cs' },
  ];
}

export default async function MenuPage({ params }: { params: Promise<{ menu: string }> }) {
  const { menu } = await params;
  const posts = await getPosts(menu);
  const image = images[menu]
  if (posts === null) notFound();

  return (
    <>
      <header className="h-48">
        <img src={image.imageSrc} alt={image.imageAlt} className="w-full h-full object-cover object-center" />
      </header>
      <main className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24">
        <section className="ps-2 pb-6 sm:pb-8 border-b border-gray-200">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{menuNames[menu]}</h2>
        </section>
        <section className="mx-auto mt-12 px-4 max-w-2xl min-w-60 grid grid-cols-1 gap-x-12 gap-y-16 md:mt-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {posts.map((post: PostType) => (
            <article key={post.id} className="mx-auto max-w-xl w-full flex flex-col items-start">
              <Link href={`${menu}/${post.slug}`} className="w-full h-56">
                <img src={post.thumbnail} alt="post image" className="w-full h-full object-cover object-center "/>
              </Link>
              <div className="flex items-center mt-6 gap-x-4 text-xs">
                <time className="text-gray-500 round-">{formatDateString(post.datetime)}</time>
                <Link
                  href={post.category.href}
                  className="rounded-xl bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </Link>
              </div>
              <Link href={`${menu}/${post.slug}`}>
                <h3 className="mt-3  line-clamp-2 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">{post.title}</h3>
                <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600 sm:pe-20 md:pe-0">{post.summary}</div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
