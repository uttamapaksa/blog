import { Suspense } from 'react';
import { menuParams } from '@/lib/constants/menu';
import { menus } from '@/lib/constants/paths';
import { getAllPosts, getPostsByMenu } from '@/lib/utils/posts';
import MenuHeader from '@/components/menu/menu-header';
import MenuTitle from '@/components/menu/menu-title';
import MenuContent from '@/components/menu/menu-content';

interface MenuPageProps {
  params: Promise<{ menu: string }>;
}

export function generateStaticParams() {
  return menuParams;
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { menu } = await params;
  const currMenu = menus[menu];
  const posts = menu !== 'category' ? await getPostsByMenu(menu) : await getAllPosts();
  const categories = ['All', ...new Set(posts.map((post) => post.category))];

  return (
    <>
      { menu !== 'category' && <MenuHeader currMenu={currMenu} />}
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <MenuTitle currMenu={currMenu} />
        <Suspense fallback={<div>Loading posts...</div>}>
          <MenuContent posts={posts} categories={categories} />
        </Suspense>
      </main>
    </>
  );
}
