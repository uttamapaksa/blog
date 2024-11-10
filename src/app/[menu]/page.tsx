import { notFound } from 'next/navigation';
import { getPosts } from '@/lib/utils/posts';
import { images } from '../../lib/constants/images';
import MenuMain from '../components/menu-main';

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
  if (posts === null) notFound();

  return (
    <>
      <MenuMain image={images[menu]} menu={menu} menuName={menuNames[menu]} posts={posts} />
    </>
  );
}
