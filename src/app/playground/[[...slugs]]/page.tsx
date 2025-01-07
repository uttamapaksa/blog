import Link from 'next/link';
import { PlaygroundNodeType } from '@/lib/constants/types';
import { playgroundNodes, playgroundParams, playgroundPaths } from '@/lib/constants/playground';
import BreadcrumbNav from '@/components/playground/breadcrumb-nav';
import ErrorNode from '@/posts/playgorund/error-node';

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
  if (!node || playgroundPaths[target] !== segments.join('/')) return <ErrorNode />;

  return (
    <div className="px-8 flex-1">
      <BreadcrumbNav segments={segments} />
      <h2 className='pt-8 pb-12 text-xl font-semibold tracking-tight sm:text-2xl'>{node.title}</h2>
      <article>
        <node.component />
      </article>
      <br /><br /><br />
      {node.childrenSlug.map((childSlug)=> {
        const child = playgroundNodes[childSlug];
        return (
          <Link key={childSlug} href={`/playground/${playgroundPaths[childSlug]}`}>
            <div
              className='text-sm m-3 p-4 rounded-md overflow-hidden cursor:pointer
              border border-gray-600 text-gray-600 dark:border-gray-300 dark:text-gray-300
              hover:text-indigo-800 hover:border-indigo-800 dark:hover:text-indigo-400 dark:hover:border-indigo-400'
              >
                {child.title} &ensp;&raquo;
            </div>
          </Link>
        );
      })}
    </div>
  );
}
