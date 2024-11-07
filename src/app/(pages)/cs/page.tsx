import MenuMain from '@/components/menu-main';
import MenuHeader from '@/components/menu-header';
import { images } from '@/lib/constants/images';

export default function CS() {
  return (
    <>
      <MenuHeader image={images.cs} />
      <MenuMain menu='Computer Science' />
    </>
  );
}
