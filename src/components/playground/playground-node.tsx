'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { PlaygroundNodeType } from '@/lib/constants/types';
import { playgroundNodes, playgroundPaths } from '@/lib/constants/playground';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@/components/custom-disclosure";

interface PlaygroundNodeProps {
  node: PlaygroundNodeType;
  target: string;
  openSlugs: Set<string>;
}

export default function PlaygroundNode({ node, target, openSlugs }: PlaygroundNodeProps) {
  const [first, setFirst] = useState(true);
  const nodePath = playgroundPaths[node.slug];
  const isTarget = target === node.slug;
  const isRoot = !nodePath.includes('/');

  useEffect(() => {
    setFirst(false);
  }, []);

  return (
    <Disclosure className="py-1">
      {({ open, setOpen }) => {
        if (first && !open && openSlugs.has(node.slug)) {
          setOpen(true);
        }
        return (
          node.childrenSlug.length > 0
            ?
            <>
              <Link href={`/playground/${nodePath}`}>
                <DisclosureButton setOpen={setOpen} className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
                  <span className={`py-1 text-sm/6 font-semibold
                    ${isTarget ? 'text-blue-500' : isRoot ? '' : 'font-normal text-gray-700 dark:text-gray-400'}`}>{node.title}</span>
                  <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                </DisclosureButton>
              </Link>
              <DisclosurePanel open={open} className="py-1 pl-6 pr-4 text-sm/5 border-l border-gray-300 dark:border-gray-700">
                {node.childrenSlug.map((childSlug) => (
                  <PlaygroundNode key={childSlug} node={playgroundNodes[childSlug]} target={target} openSlugs={openSlugs} />
                ))}
              </DisclosurePanel>
            </>
            :
            <>
              <Link href={`/playground/${nodePath}`} className="flex w-full items-center justify-between hover:underline hover:opacity-70">
                <span className={`py-1 text-sm/6 font-semibold
                  ${isTarget ? 'text-blue-500' : isRoot ? '' : 'font-normal text-gray-700 dark:text-gray-400'}`}>{node.title}</span>
              </Link>
            </>
          )     
        }}
    </Disclosure>
  );
}
