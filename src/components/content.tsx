'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostType } from '@/lib/constants/types';
import { formatDateString } from '@/lib/utils/dates';
import Category from './category';

interface ContentProps {
  menu: string;
  posts: PostType[];
  categories: string[];
}

const Content = ({ menu, posts, categories }: ContentProps) => {
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
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <>
      <section className="flex">
        {categories.map((category) => (
          <div 
            key={category}
            onClick={() => selectCategory(category)}
            className={`rounded-xl mt-6 mx-1 px-3 py-1.5 font-medium text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer ${selected.has(category) ? "" : "opacity-50"}`}
          >
            {category}
          </div>
        ))}
      </section>
      <section className="mx-auto mt-12 px-1 max-w-2xl min-w-60 grid grid-cols-1 gap-x-12 gap-y-16 md:mt-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => {
          if (!selected.has(post.category.title)) {
            return null;
          }
          return (
            <Link key={post.id} href={`${menu}/${post.slug}`} className="group mx-auto max-w-xl w-full flex flex-col items-start" >
              <div className="relative w-full h-56">
                <Image src={post.thumbnail} alt="post image" fill className="object-cover object-center group-hover:opacity-80" />
              </div>
              <div className="flex items-center mt-6 gap-x-4 text-xs">
                <time className="text-gray-500 dark:text-gray-400 round-">{formatDateString(post.datetime)}</time>
                <Category href={post.category.href} title={post.category.title} />
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

export default Content;
