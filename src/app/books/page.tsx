import MenuMain from '../../components/menu-main';
import MenuHeader from '../../components/menu-header';
import { images } from '../../lib/constants/images';
import { getPosts } from '@/lib/utils/posts';

export default async function Books() {
  const posts = await getPosts('books');

  return (
    <>
      <MenuHeader image={images.books} />
      <MenuMain menu='Books' posts={posts} />
    </>
  );
}
