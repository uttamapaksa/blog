'use client';

import { useRouter } from 'next/navigation';

const Category = ({ href, title }: {href: string, title: string}) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div onClick={handleClick}>
      <div className="rounded-xl bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 cursor-pointer">
        {title}
      </div>
    </div>
  );
};

export default Category;
