import MenuMain from '@/components/menu-main';
import MenuHeader from '@/components/menu-header';
import { images } from '@/lib/constants/images';

export default function React() {
  return (
    <>
      <MenuHeader image={images.react} />
      <MenuMain menu='React' />
    </>
  );
}
