export default async function AlgorithmDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div>My Post: {slug}</div>;
}
