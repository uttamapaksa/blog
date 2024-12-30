'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import { PostType } from '@/lib/constants/types';
import { formatDateString } from '@/lib/utils/dates';
import Category from '../category';

interface ContentProps {
  posts: PostType[];
  categories: string[];
}

export default function MenuContent({ posts, categories }: ContentProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const [selected, setSelected] = useState<Set<string>>(new Set(categories));

  const selectCategory = (category: string) => {
    setSelected((prev) => {
      if (category === 'All') {
        if (prev.has(category)) {
          return new Set();
        }
        return new Set(categories);
      }
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
        next.delete('All');
      } else {
        next.add(category);
        if (next.size + (next.has('All') ? 0 : 1) === categories.length) {
          next.add('All')
        }
      }
      return next;
    });
  };

  useEffect(() => {
    if (!search) return;
    window.history.pushState({}, '', '/category');
    setSelected(new Set([search]));
  }, [search])

  return (
    <>
      <section className="flex flex-wrap w-full">
        {categories.map((category) => (
          <div 
            key={category}
            onClick={() => selectCategory(category)}
            className={`rounded-xl mt-6 mx-1 px-3 py-1.5 font-medium text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer 
              ${selected.has(category) ? "text-gray-100 bg-indigo-500 hover:bg-indigo-400 dark:bg-indigo-700 dark:hover:bg-indigo-800" : ""}`}
          >
            {category}
          </div>
        ))}
      </section>
      <section className="mx-auto mt-12 px-1 max-w-2xl min-w-60 grid grid-cols-1 gap-x-12 gap-y-16 md:mt-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => {
          if (!selected.has(post.category)) {
            return null;
          }
          return (
            <Link key={post.slug} href={`/${post.menu}/${post.slug}`} className="group mx-auto max-w-xl w-full flex flex-col items-start" >
              <div className="relative w-full h-56">
                <Image src={post.thumbnail} alt="post image" fill className="object-cover object-center group-hover:opacity-80" />
              </div>
              <div className="flex items-center mt-6 gap-x-4 text-xs">
                <time className="text-gray-500 dark:text-gray-400 round-">{formatDateString(post.datetime)}</time>
                <Category category={post.category} />
              </div>
              <h3 className="mt-3 line-clamp-2 text-lg/6 font-semibold tracking-tight group-hover:text-gray-400">
                {post.title}
              </h3>
              <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600 sm:pe-20 md:pe-0 dark:text-gray-300 group-hover:text-gray-400">
                {post.summary}
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};
