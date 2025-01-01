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
    <div className="pl-8">
      <BreadcrumbNav segments={segments} />
      <h2 className='pt-8 pb-12 sm:pb-16 text-xl font-semibold tracking-tight sm:text-2xl'>{node.title}</h2>
      <article className=''>
        <node.component />
      </article>
    </div>
  );
}
