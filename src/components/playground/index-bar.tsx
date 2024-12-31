'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PlaygroundNode from "./playground-node";
import { rootNodes } from "@/lib/constants/playground";

export default function IndexBar({ target, openSlugs }) {
  
  return (
    <>
      {/* mobile index */}
      <aside className="py-4 pl-5 pr-3 mb-6 w-full rounded-xl bg-gray-400/5 dark:bg-white/5 md:hidden">
        <Disclosure as="div">
          <DisclosureButton className="group flex w-full items-center justify-start hover:underline hover:opacity-70">
            <ChevronRightIcon className="size-6 group-data-[open]:rotate-90" />
            <span className="ms-1 text-sm/6 font-semibold">Index</span>
          </DisclosureButton>
          <DisclosurePanel className="py-1 pl-6 pr-4 text-sm/5 border-l border-gray-300 dark:border-gray-700">
            {rootNodes.map((node) => (
              <PlaygroundNode key={node.slug} node={node} target={target} openSlugs={openSlugs} />
            ))}
          </DisclosurePanel>
        </Disclosure>
      </aside>
      {/* desktop index */}
      <aside className="py-4 pl-5 pr-3 w-80 rounded-xl bg-gray-400/5 dark:bg-white/5 hidden md:block">
        {rootNodes.map((node) => (
          <PlaygroundNode key={node.slug} node={node} target={target} openSlugs={openSlugs} />
        ))}
      </aside>
    </>
  );
}
