import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { menus } from "@/lib/constants/paths";
import { rootNodes, playgroundParams } from "@/lib/constants/params";
import MenuHeader from "@/components/menu/menu-header";
import MenuTitle from "@/components/menu/menu-title";
import PlaygroundNode from "@/components/playground/playground-node";
import { AddressBar } from "@/components/playground/address-bar";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slugs?: string[] }>;
}

export function generateStaticParams() {
  return playgroundParams;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { slugs } = await params;
  const currMenu = menus.playground;
  const segments = slugs?.length ? slugs : ['introduction']; 
  const target = segments[segments.length-1];
  const openSlugs = new Set(slugs);

  return (
    <>
      <MenuHeader currMenu={currMenu} />
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <MenuTitle currMenu={currMenu} />
        <section className="flex mt-6 flex-wrap">
          {/* mobile index */}
          <nav className="py-4 pl-5 pr-3 mb-6 w-full rounded-xl bg-gray-400/5 dark:bg-white/5 md:hidden">
            <Disclosure as="div">
              <DisclosureButton className="group flex w-full items-center justify-start hover:underline hover:opacity-70">
                <ChevronRightIcon className="size-6 group-data-[open]:rotate-90" />
                <span className='ms-1 text-sm/6 font-semibold'>Index</span>
              </DisclosureButton>
              <DisclosurePanel className="py-1 pl-6 pr-4 text-sm/5 border-l border-gray-300 dark:border-gray-700">
                {rootNodes.map((node) => (
                  <PlaygroundNode key={node.slug} node={node} path='' target={target} openSlugs={openSlugs} />
                ))}
              </DisclosurePanel>
            </Disclosure >
          </nav>
          {/* desktop index */}
          <aside className="py-4 pl-5 pr-3 w-80 rounded-xl bg-gray-400/5 dark:bg-white/5 hidden md:block">
            {rootNodes.map((node) => (
              <PlaygroundNode key={node.slug} node={node} path='' target={target} openSlugs={openSlugs} />
            ))}
          </aside>
          <article className="pl-8">
            <AddressBar segments={segments} />
            {children}
          </article>
        </section>
      </main>
    </>
  );
}
