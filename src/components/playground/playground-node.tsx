import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { PlaygroundNodeType } from '@/lib/constants/types';
import { playgroundNodes } from '@/lib/utils/playground';

interface PlaygroundNodeProps {
  node: PlaygroundNodeType;
  path: string;
  target: string;
  openSlugs: Set<string>;
}

export default function PlaygroundNode({ node, path, target, openSlugs }: PlaygroundNodeProps) {
  const currPath = `${path}/${node.slug}`;
  const isRoot = path === '';
  const isTarget = target === node.slug;

  return (
    <Disclosure as="div" className="py-1" defaultOpen={openSlugs.has(node.slug)}>
      { node.childrenSlug.length > 0
        ?
        <>
          <Link href={`/playground/${currPath}`}>
            <DisclosureButton className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
              <span className={`py-1 text-sm/6 font-semibold
                ${isTarget ? 'text-blue-500' : isRoot ? '' : 'font-normal text-gray-700 dark:text-gray-400'}`}>{node.title}</span>
              <ChevronRightIcon className="size-5 group-data-[open]:rotate-90" />
            </DisclosureButton>
          </Link>
          <DisclosurePanel className="py-1 pl-6 pr-4 text-sm/5 border-l border-gray-300 dark:border-gray-700">
            {node.childrenSlug.map((childSlug) => (
              <PlaygroundNode key={childSlug} node={playgroundNodes[childSlug]} path={currPath} target={target} openSlugs={openSlugs} />
            ))}
          </DisclosurePanel>
        </>
        :
        <>
          <Link href={`/playground/${currPath}`} className="flex w-full items-center justify-between hover:underline hover:opacity-70">
            <span className={`py-1 text-sm/6 font-semibold
              ${isTarget ? 'text-blue-500' : isRoot ? '' : 'font-normal text-gray-700 dark:text-gray-400'}`}>{node.title}</span>
          </Link>
        </>
      }
    </Disclosure>
  );
}