'use client'

import { usePathname } from 'next/navigation'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Books', href: '/books' },
  { name: 'React', href: '/react' },
  { name: 'Alogrithm', href: '/algorithm' },
  { name: 'CS', href: '/cs' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="font-[family-name:var(--font-geist-sans)] border-b-2 border-gray-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-center">
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          {/* Desktop menu item*/}
          <div className="flex flex-1 items-center justify-center sm:items-stretch h-full">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 h-full">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'flex items-center justify-center px-5 py-2 text-sm font-medium',
                      pathname === item.href ? 'border-b-2 border-indigo-500' : 'hover:border-b-2 hover:border-gray-200',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* github profile */}
          <div className="mr-2">
            <a href='https://github.com/uttamapaksa' target="_blank" >
              <img alt="github profile" src="/github-light.svg" className="h-8 w-8 rounded-full hover:ring-2" />
            </a>
          </div>
        </div>
      </div>
      {/* Mobile menu item*/}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-2 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                'flex items-center justify-center px-3 py-2 text-sm font-medium',
                pathname === item.href ? 'bg-gray-700 text-white' : 'hover:bg-gray-100',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
