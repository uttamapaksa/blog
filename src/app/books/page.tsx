import MenuMain from '../../components/menu-main';
import MenuHeader from '../../components/menu-header';
import { images } from '../../lib/constants/images';
import { getPosts } from '@/lib/utils/posts';

const menu = 'books';
const menuName = 'Books';

export default async function Books() {
  const posts = await getPosts(menu);

  return (
    <>
      <MenuHeader image={images[menu]} />
      <MenuMain menu={menu} menuName={menuName} posts={posts} />
    </>
  );
}
