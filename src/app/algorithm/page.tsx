import MenuMain from '../../components/menu-main';
import MenuHeader from '../../components/menu-header';
import { images } from '../../lib/constants/images';
import { getPosts } from '@/lib/utils/posts';

export default async function Algorithm() {
  const posts = await getPosts('algorithm');

  return (
    <>
      <MenuHeader image={images.algorithm} />
      <MenuMain menu='Algorithm' posts={posts} />
    </>
  );
}
