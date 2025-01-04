'use client';

import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { PlaygroundNodeType } from '@/lib/constants/types';
import { playgroundNodes, playgroundPaths } from '@/lib/constants/playground';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

interface PlaygroundNodeProps {
  node: PlaygroundNodeType;
  target: string;
  openSlugs: Set<string>;
}

export default function PlaygroundNode({ node, target, openSlugs }: PlaygroundNodeProps) {
  const nodePath = playgroundPaths[node.slug];
  const isTarget = target === node.slug;
  const isRoot = !nodePath.includes('/');

  return (
    <Disclosure as="div" className="py-1 font-semibold tracking-tight" defaultOpen={openSlugs.has(node.slug)}>
      { node.childrenSlug.length > 0
        ?
        <>
          <Link href={`/playground/${nodePath}`}>
            <DisclosureButton className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
              <span className={`py-1 ${isTarget ? 'text-blue-500' : isRoot ? '' : 'text-gray-700 dark:text-gray-400'}`}>
                {node.title}
              </span>
              <ChevronRightIcon className='size-5 group-data-[open]:rotate-90'/>
            </DisclosureButton>
          </Link>
          <DisclosurePanel className="py-1 pl-6 pr-4 border-l border-gray-300 dark:border-gray-700">
            {node.childrenSlug.map((childSlug) => (
              <PlaygroundNode key={childSlug} node={playgroundNodes[childSlug]} target={target} openSlugs={openSlugs} />
            ))}
          </DisclosurePanel>
        </>
        :
        <>
          <Link href={`/playground/${nodePath}`} className="flex w-full items-center justify-between hover:underline hover:opacity-70">
            <span className={`py-1 ${isTarget ? 'text-blue-500' : isRoot ? '' : 'font-medium text-gray-700 dark:text-gray-400'}`}>
              {node.title}
            </span>
          </Link>
        </>
      }
    </Disclosure>
  );
}