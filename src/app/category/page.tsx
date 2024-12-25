import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { menus } from '@/lib/constants/paths';
import { getAllPosts } from '@/lib/utils/posts';
import Content from '@/components/content';

export default async function CategoryPage() {
  const currMenu = menus.category
  const posts = await getAllPosts();
  if (posts === null) notFound();
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  return (
    <>
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <section className="ps-2 pb-6 sm:pb-8 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">{currMenu.title}</h2>
        </section>
        <Suspense fallback={<div>Loading posts...</div>}>
          <Content posts={posts} categories={categories} />
        </Suspense>
      </main>
    </>
    );
}
