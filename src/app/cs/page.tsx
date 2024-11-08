import MenuMain from '../../components/menu-main';
import MenuHeader from '../../components/menu-header';
import { images } from '../../lib/constants/images';
import { getPosts } from '@/lib/utils/posts';

const menu = 'cs';
const menuName = 'Computer Science';

export default async function CS() {
  const posts = await getPosts(menu);

  return (
    <>
      <MenuHeader image={images[menu]} />
      <MenuMain menu={menu} menuName={menuName} posts={posts} />
    </>
  );
}
