import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { menuSlugParams } from '@/lib/constants/params';
import { getPostBySlug } from '@/lib/utils/posts';
import { formatDateString } from '@/lib/utils/dates';

export function generateStaticParams() {
  return menuSlugParams;
}

export default async function PostPage({ params }: { params: Promise<{ menu: string; slug: string }> }) {
  const { menu, slug } = await params;
  const post = await getPostBySlug(menu, slug);
  if (post === null) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-8 sm:px-12 lg:px-24 ">
      <section className="flex justify-between items-center mt-6 text-xs sm:mt-8">
        <time className="text-gray-500 round-">{formatDateString(post.datetime)}</time>
        <Link href={post.category.href} className="rounded-xl bg-gray-50 px-3 py-1.5 text-gray-600 font-medium dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800">
          {post.category.title}
        </Link>
      </section>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-200">{post.summary}</p>
      <div className="relative mt-12 h-80">
        <Image src={post.thumbnail} alt="post image" fill className="object-contain object-center" />
      </div>
      <div className='prose my-20 dark:prose-invert max-w-full'>
        {post.content}
      </div>
    </main>
  );
}
