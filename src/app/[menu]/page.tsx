import Image from 'next/image';
import { notFound } from 'next/navigation';
import { menuParams } from '@/lib/constants/params';
import { menus } from '@/lib/constants/paths';
import { getPosts } from '@/lib/utils/posts';
import Content from '@/components/content';

export function generateStaticParams() {
  return menuParams
}

export default async function MenuPage({ params }: { params: Promise<{ menu: string }> }) {
  const { menu } = await params;
  const currMenu = menus[menu]
  const posts = await getPosts(menu);
  if (posts === null) notFound();
  const categories = ['All', ...new Set(posts.map(post => post.category.title))];

  return (
    <>
      <header data-mode="dark" className="relative h-48">
        <Image src={currMenu.imageSrc} alt={currMenu.imageAlt} fill className="object-cover object-center" loading="eager" />
      </header>
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <section className="ps-2 pb-6 sm:pb-8 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">{currMenu.title}</h2>
        </section>
        <Content menu={menu} posts={posts} categories={categories} />
      </main>
    </>
    );
}
