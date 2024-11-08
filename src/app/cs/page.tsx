import MenuMain from '../../components/menu-main';
import MenuHeader from '../../components/menu-header';
import { images } from '../../lib/constants/images';
import { getPosts } from '@/lib/utils/posts';

export default async function CS() {
  const posts = await getPosts('cs');

  return (
    <>
      <MenuHeader image={images.cs} />
      <MenuMain menu='Computer Science' posts={posts} />
    </>
  );
}
