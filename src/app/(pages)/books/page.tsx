import MenuMain from '@/components/menu-main';
import MenuHeader from '@/components/menu-header';
import { images } from '@/lib/constants/images';

export default function Books() {
  return (
    <>
      <MenuHeader image={images.books} />
      <MenuMain menu='Books' />
    </>
  );
}
