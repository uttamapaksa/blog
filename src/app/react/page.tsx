import MenuMain from '../../components/menu-main';
import MenuHeader from '../../components/menu-header';
import { images } from '../../lib/constants/images';
import { getPosts } from '@/lib/utils/posts';

export default async function React() {
  const posts = await getPosts('react');

  return (
    <>
      <MenuHeader image={images.react} />
      <MenuMain menu='React' posts={posts} />
    </>
  );
}
