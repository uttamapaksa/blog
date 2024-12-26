import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { menuParams } from '@/lib/constants/params';
import { menus } from '@/lib/constants/paths';
import { getPostsByMenu } from '@/lib/utils/posts';
import MenuHeader from '@/components/menu/menu-header';
import MenuTitle from '@/components/menu/menu-title';
import MenuContent from '@/components/menu/menu-content';

export function generateStaticParams() {
  return menuParams
}

export default async function MenuPage({ params }: { params: Promise<{ menu: string }> }) {
  const { menu } = await params;
  const currMenu = menus[menu]
  const posts = await getPostsByMenu(menu);
  if (posts === null) notFound();
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  return (
    <>
      <MenuHeader currMenu={currMenu} />
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <MenuTitle currMenu={currMenu} />
        <Suspense fallback={<div>Loading posts...</div>}>
          <MenuContent posts={posts} categories={categories} />
        </Suspense>
      </main>
    </>
    );
}
