import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PlaygroundNodeType } from '@/lib/constants/types';
import { playgroundNodes, playgroundParams, playgroundPaths } from '@/lib/constants/playground';
import BreadcrumbNav from '@/components/playground/breadcrumb-nav';

interface SlugsPageProps {
  params: Promise<{ slugs: string[] }>;
}

export function generateStaticParams() {
  return playgroundParams;
}

export default async function SlugsPage({ params }: SlugsPageProps) {
  const { slugs } = await params;
  const segments = slugs ?? ['introduction'];
  const target = segments[segments.length-1];
  const node: PlaygroundNodeType = playgroundNodes[target];
  if (!node || playgroundPaths[target] !== segments.join('/')) return notFound();

  return (
    <div className="px-8 flex-1">
      <BreadcrumbNav segments={segments} />
      <h2 className='pt-8 pb-12 sm:pb-16 text-xl font-semibold tracking-tight sm:text-2xl'>{node.title}</h2>
      <article className=''>
        <node.component />
      </article>
      <br /><br /><br />
      <div className='text-sm'>
        {node.childrenSlug.map((childSlug)=> {
          const child = playgroundNodes[childSlug];
          return (
            <div
              key={childSlug}
              className='text-sm m-3 p-4 rounded-md overflow-hidden cursor:pointer
              border border-gray-600 text-gray-600 dark:border-gray-300 dark:text-gray-300
            hover:text-indigo-800 hover:border-indigo-800 dark:hover:text-indigo-400 dark:hover:border-indigo-400'
            >
              <Link href={`/playground/${playgroundPaths[childSlug]}`}>
                {child.title} &ensp;&raquo;
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
