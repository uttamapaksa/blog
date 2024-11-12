'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { navigations } from '@/lib/constants/paths';

export default function Navigation() {
  const pathname = usePathname();
  const currHref = '/' + pathname.split('/')[1]
  const toggleDarkMode = () => {
    const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
    const prevTheme = themeCookie ? themeCookie.split('=')[1] : 'light';
    if (prevTheme === 'dark') {
      document.documentElement.classList.remove('dark');
      document.cookie = 'theme=light; max-age=604800; path=/; secure';
    } else {
      document.documentElement.classList.add('dark');
      document.cookie = 'theme=dark; max-age=604800; path=/; secure';
    }
  }

  return (
    <Disclosure as="nav" className="border-b-2 border-gray-100 dark:border-gray-900">
      <div className="relative mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative h-20 flex items-center">
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white ">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          {/* Desktop menu item*/}
          <div className="flex flex-1 items-center justify-center sm:items-stretch h-full">
            <div className="hidden sm:block">
              <div className="flex gap-x-2 h-full">
                {navigations.map((navigation) => (
                  <Link
                    key={navigation.name}
                    href={navigation.href}
                    className={`
                      flex items-center justify-center px-5 pt-2 border-b-2 text-sm font-medium transition ease-in-out duration-200
                      ${currHref === navigation.href ? ' border-indigo-500' : 'border-transparent hover:border-b-2 hover:border-gray-400 dark:hover:border-gray-600'}
                    `}
                  >
                    {navigation.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* darm mode, github profile */}
          <div className="absolute right-0 flex items-center gap-x-4 pt-2 pr-2">
            <div className="h-7 w-7 hover:text-indigo-500" onClick={toggleDarkMode}>
              <MoonIcon className="hidden dark:block" />
              <SunIcon className="block hover:stroke-2 dark:hidden"/>
            </div>
            <Link href="https://github.com/uttamapaksa" target="_blank" className='h-7 w-7 rounded-full hover:ring-2'>
              <img src="/github-dark.svg" alt="github profile" className="hidden dark:block" />
              <img src="/github-light.svg" alt="github profile" className="block dark:hidden" />
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu item*/}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 py-2">
          {navigations.map((navigation) => (
            <Link key={navigation.name} href={navigation.href}>
              <DisclosureButton
                as="div"
                className={`
                  flex items-center justify-center px-3 py-2 text-sm font-medium
                  ${currHref === navigation.href ? 'bg-gray-700 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-900'}
                `}
              >
                {navigation.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
