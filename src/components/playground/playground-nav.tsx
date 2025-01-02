'use client';

import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { rootNodes } from "@/lib/constants/playground";
import PlaygroundNode from "@/components/playground/playground-node";

export default function PlaygroundNav() {
  const pathname = usePathname();
  const paths = (pathname !== '/playground' ? pathname : 'introduction').split('/');
  const target = paths[paths.length-1];
  const openSlugs = new Set(paths);

  return (
    <>
      {/* mobile index */}
      <aside className="py-4 pl-5 pr-3 mb-6 w-full rounded-xl bg-gray-400/5 dark:bg-white/5 md:hidden">
        <Disclosure as="div">
          <DisclosureButton className="group flex w-full items-center justify-start hover:underline hover:opacity-70">
            <ChevronRightIcon className="size-6 group-data-[open]:rotate-90" />
            <span className="ms-1 font-semibold">Index</span>
          </DisclosureButton>
          <DisclosurePanel className="py-1 pl-6 pr-4 border-l border-gray-300 dark:border-gray-700">
            {rootNodes.map((node) => (
              <PlaygroundNode key={node.slug} node={node} target={target} openSlugs={openSlugs} />
            ))}
          </DisclosurePanel>
        </Disclosure>
      </aside>
      {/* desktop index */}
      <aside className="py-4 pl-5 pr-3 w-64 text-sm rounded-xl bg-gray-400/5 dark:bg-white/5 hidden md:block">
        {rootNodes.map((node) => (  
          <PlaygroundNode key={node.slug} node={node} target={target} openSlugs={openSlugs} />
        ))}
      </aside>
    </>
  );
}
