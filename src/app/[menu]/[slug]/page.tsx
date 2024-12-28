import Image from 'next/image';
import { menuSlugParams } from '@/lib/constants/params';
import { getPostBySlug } from '@/lib/utils/posts';
import { formatDateString } from '@/lib/utils/dates';
import Category from '@/components/category';

export function generateStaticParams() {
  return menuSlugParams;
}

export default async function PostPage({ params }: { params: Promise<{ menu: string; slug: string }> }) {
  const { menu, slug } = await params;
  const post = await getPostBySlug(menu, slug);

  return (
    <main className="mx-auto max-w-5xl px-6 py-8 sm:px-12 lg:px-24">
      <section className="flex justify-between items-center mt-6 text-xs sm:mt-8">
        <time className="text-gray-500 dark:text-gray-400 round-">{formatDateString(post.datetime)}</time>
        <Category category={post.category} />
      </section>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-200">{post.summary}</p>
      <div className="relative mt-6 h-96 sm:mt-12">
        <Image src={post.thumbnail} alt="post image" fill className="object-contain object-center" />
      </div>
      <div className="prose max-w-full my-10 sm:my-20 dark:prose-invert dark:prose-h2:text-gray-100 dark:prose-h3:text-gray-100 dark:prose-h4:text-gray-100 dark:text-gray-100">
        {post.content}
      </div>
    </main>
  );
}
