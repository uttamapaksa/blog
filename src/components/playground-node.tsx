import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { PlaygroundNodeType } from '@/lib/constants/types';

interface PlaygroundNodeProps {
  node: PlaygroundNodeType;
  openSlugs: Set<string>;
}

export default function PlaygroundNode({ node, openSlugs }: PlaygroundNodeProps) {
  return (
      <Disclosure as="div" className="" defaultOpen={openSlugs.has(node.slug)}>
        {node.children.length > 0 && 
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium group-data-[hover]:opacity-70">{node.title}</span>
              <ChevronRightIcon className="size-5 group-data-[hover]:opacity-70 group-data-[open]:rotate-90" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 pl-8 pr-6 py-2 text-sm/5 border-l border-gray-300 dark:border-gray-700">
              {node.children.map((child) => (
                <PlaygroundNode key={child.title} node={child} openSlugs={openSlugs} />
              ))}
            </DisclosurePanel>
          </>
        }
        {node.children.length == 0 && 
          <>
            <div className="group flex w-full items-center justify-between">
              <span className="py-1 text-sm/6 font-medium group-data-[hover]:opacity-70">{node.title}</span>
            </div>
          </>
        }
      </Disclosure>
  );
}
