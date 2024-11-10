import Link from 'next/link';
import { formatDateString } from '../../lib/utils/dates';
import type { PostType } from '@/lib/constants/types';

export default function MenuMain({ image, menu, menuName, posts }) {
  return (
    <>
      <header className="h-48">
        <img src={image.imageSrc} alt={image.imageAlt} className="w-full h-full object-cover object-center" />
      </header>
      <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-12">
        <section className="ps-2 pb-6 sm:pb-8 border-b border-gray-200">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{menuName}</h2>
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
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">{post.title}</h3>
                <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600 sm:pe-20 md:pe-0">{post.summary}</div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
