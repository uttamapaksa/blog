'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { menus } from '@/lib/constants/paths';

const navigations = [menus.home, menus.books, menus.react, menus.algorithm, menus.cs, menus.playground, menus.errors];

export default function Navigation() {
  const pathname = usePathname();
  const currHref = '/' + pathname.split('/')[1]

  const toggleDarkMode = () => {
    const theme = localStorage.getItem('theme');
    const darkMode = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <Disclosure as="nav" className="border-b-2 border-gray-100 dark:border-gray-900">
      <div className="relative mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative h-20 flex items-center">
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white ">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          {/* Desktop menu item*/}
          <div className="flex flex-1 items-center justify-center sm:items-stretch h-full">
            <div className="hidden md:block">
              <div className="flex gap-x-1 h-full">
                {navigations.map((navigation) => (
                  <Link
                    key={navigation.name}
                    href={navigation.href}
                    className={`
                      flex items-center justify-center px-5 pt-2 text-sm font-medium ease-in-out duration-100
                      ${currHref === navigation.href ? 'border-b-2 border-indigo-500' : 'border-gray-400 hover:border-b-2 dark:hover:border-gray-500'}
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
            <Link href="https://github.com/uttamapaksa" target="_blank" className='relative h-7 w-7 rounded-full hover:ring-2'>
              <Image src="/github-dark.svg" alt="github profile" fill className="hidden dark:block" />
              <Image src="/github-light.svg" alt="github profile" fill className="block dark:hidden" />
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu item*/}
      <DisclosurePanel className="md:hidden">
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
