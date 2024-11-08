export default function AlgorithmDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return <div>My Post: {slug}</div>;
}