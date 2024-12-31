import { PlaygroundNodeType } from '@/lib/constants/types';
import { playgroundNodes, playgroundParams, playgroundPaths } from '@/lib/constants/playground';
import NotFound from '@/app/not-found';
import AddressBar from '@/components/playground/address-bar';
import IndexBar from '@/components/playground/index-bar';

export function generateStaticParams() {
  return playgroundParams;
}

export default async function SlugsPage({ params }: { params: Promise<{ slugs: string[] }> }) {
  const { slugs } = await params;
  const segments = slugs ?? ['introduction'];
  const target = segments[segments.length-1];
  const openSlugs = new Set(segments);
  openSlugs.delete(target);
  
  const node: PlaygroundNodeType = playgroundNodes[target];
  if (!node || playgroundPaths[target] !== segments.join('/')) return <NotFound />;

  return (
    <div className="flex mt-6 flex-wrap">
      <IndexBar target={target} openSlugs={openSlugs} />
      <section className="pl-8">
        <AddressBar segments={segments} />
        <h2 className='pt-8 pb-12 sm:pb-16 text-xl font-semibold tracking-tight sm:text-2xl'>{node.title}</h2>
        <article className=''>
          <node.component />
        </article>
      </section>
    </div>
  );
}
