import Image from 'next/image';
import { menuSlugParams } from '@/lib/constants/params';
import { getPostBySlug } from '@/lib/utils/posts';
import { formatDateString } from '@/lib/utils/dates';
import Category from '@/components/category';
import Link from 'next/link';

interface MenuSlugPageProps {
  params: Promise<{ menu: string; slug: string }>;
}

export function generateStaticParams() {
  return menuSlugParams;
}

export default async function MenuSlugPage({ params }: MenuSlugPageProps) {
  const { menu, slug } = await params;
  const post = await getPostBySlug(menu, slug);

  return (
    <main className="mx-auto max-w-5xl px-6 py-8 sm:px-12 lg:px-24">
      <section className="flex justify-between items-center mt-6 text-xs sm:mt-8">
        <time className="text-gray-500 dark:text-gray-400 round-">{formatDateString(post.datetime)}</time>
        <Category category={post.category} />
      </section>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-6 text-lg sm:text-xl/8 text-gray-700 dark:text-gray-200">
        {post.summary}&ensp;
        {post.link && <Link href={post.link} className='hover:underline text-indigo-400'>{post.link}</Link>}
      </p>
      <div className='flex flex-col items-center mt-6 sm:mt-12'>
        <Image src={post.thumbnail} alt="post image" width={576} height={384} className="max-h-96 object-contain" />
        <div className="flex justify-center mt-2"><span className='text-xs text-gray-500'>{post.source}</span></div>
      </div>
      <div className="prose max-w-full my-10 sm:my-20 dark:prose-invert dark:prose-h2:text-gray-100 dark:prose-h3:text-gray-100 dark:prose-h4:text-gray-100 dark:text-gray-100">
        {post.content}
      </div>
    </main>
  );
}
