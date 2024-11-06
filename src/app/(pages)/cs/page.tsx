import MenuHeader from '@/components/menu-header';
import MenuMain from '@/components/menu-main';
import { images } from '@/lib/constants/images';

export default function CS() {
  return (
    <>
      <MenuHeader image={images.cs} />
      <MenuMain menu='Computer Science' />
    </>
  );
}
