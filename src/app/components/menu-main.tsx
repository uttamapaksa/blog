import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPosts } from '@/lib/utils/posts';
import { formattedDate } from '@/lib/utils/dates';

export default async function MenuMain({ menu }: { menu: string }) {
  const posts = await getPosts(menu);

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-12">
      <header className="ps-2 pb-6 sm:pb-8 border-b border-gray-200">
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{menu}</h2>
      </header>
      <section className="mx-auto mt-12 px-4 max-w-2xl min-w-60 grid grid-cols-1 gap-x-12 gap-y-16 md:mt-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="mx-auto max-w-xl w-full flex flex-col items-start">
            <a href={`books/${post.slug}`} className="w-full h-60">
              <img alt="post image" src={post.thumbnail} className="w-full h-full object-cover object-center rounded-md" />
            </a>
            <div className="flex items-center mt-6 gap-x-4 text-xs">
              <time className="text-gray-500 round-">
                {formattedDate(post.datetime)}
              </time>
              <a href={post.category.href } className="rounded-xl bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {post.category.title}
              </a>
            </div>
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <a href={`books/${post.slug}`}>{post.title}</a>
            </h3>
            <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600 sm:pe-20 md:pe-0">
              <MDXRemote source={post.content} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
