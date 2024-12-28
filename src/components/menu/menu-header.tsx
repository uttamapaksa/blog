import Image from 'next/image'
import { MenuType } from '@/lib/constants/types'

export default function MenuHeader({ currMenu }: { currMenu: MenuType }) {
  return (
    <header className="relative h-48">
      <Image src={currMenu.imageSrc} alt={currMenu.imageAlt} fill className="object-cover object-center" />
    </header>
  )
}
