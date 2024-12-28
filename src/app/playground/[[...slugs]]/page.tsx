import { notFound } from 'next/navigation';
import { playgrounComponents } from '@/lib/constants/params';
import Intro from '@/posts/playgorund/intro';

export default async function page({ params }: { params: Promise<{ slugs: string[] }> }) {
  const { slugs } = await params;
  if (!slugs) return (<Intro />)
  const PlaygroundComponent = playgrounComponents[slugs[slugs.length-1]];
  if (!PlaygroundComponent) notFound();
  
  return (
    <>
      <PlaygroundComponent />
    </>
  )
}
