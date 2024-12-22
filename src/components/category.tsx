'use client';

import { useRouter } from 'next/navigation';

const Category = ({ href, title }: {href: string, title: string}) => {
  const router = useRouter();
  const clickCategory = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div onClick={clickCategory} className="rounded-xl px-3 py-1.5 text-gray-600 bg-gray-50 hover:bg-gray-100 font-medium dark:text-gray-400 dark:bg-gray-900  dark:hover:bg-gray-800 cursor-pointer">
      {title}
    </div>
  );
};

export default Category;
