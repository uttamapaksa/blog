import { notFound } from 'next/navigation';
import { PlaygroundNodeType } from '@/lib/constants/types';
import { playgroundNodes } from '@/lib/utils/playground';

export default async function page({ params }: { params: Promise<{ slugs: string[] }> }) {
  const { slugs } = await params;
  const slug = slugs ? slugs[slugs.length-1] : 'introduction';
  const node: PlaygroundNodeType = playgroundNodes[slug];
  if (!node) notFound();

  return (
    <>
      <h2 className='pt-8 pb-12 sm:pb-16 text-xl font-semibold tracking-tight sm:text-2xl'>{node.title}</h2>
      <main className=''>
        <node.component />
      </main>
    </>
  );
}
