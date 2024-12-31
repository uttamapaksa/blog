import { Suspense } from 'react';
import { menus } from '@/lib/constants/paths';
import { getAllPosts } from '@/lib/utils/posts';
import MenuTitle from '@/components/menu/menu-title';
import MenuContent from '@/components/menu/menu-content';

export default async function CategoryPage() {
  const currMenu = menus.category
  const posts = await getAllPosts();
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  return (
    <>
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <MenuTitle currMenu={currMenu} />
        <Suspense fallback={<div>Loading posts...</div>}>
          <MenuContent posts={posts} categories={categories} />
        </Suspense>
      </main>
    </>
    );
}
