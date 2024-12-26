import { MenuType } from '@/lib/constants/types'

export default function MenuTitle({ currMenu }: { currMenu: MenuType }) {
  return (
    <section className="ps-2 pb-6 sm:pb-8 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">{currMenu.title}</h2>
    </section>
  )
}
