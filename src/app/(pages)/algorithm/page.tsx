import MenuHeader from '@/components/menu-header';
import MenuMain from '@/components/menu-main';
import { images } from '@/lib/constants/images';

export default function Algorithm() {
  return (
    <>
      <MenuHeader image={images.algorithm} />
      <MenuMain menu='Algorithm' />
    </>
  );
}
