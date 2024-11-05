const products = [
  {
    id: 1,
    name: 'Books',
    href: 'books',
    imageSrc: '/books-wallpaper.jpg',
    imageAlt: 'Books',
  },
  {
    id: 2,
    name: 'React',
    href: 'react',
    imageSrc: '/react-wallpaper.jpg',
    imageAlt: 'React',
  },
  {
    id: 3,
    name: 'Algorithm',
    href: 'algorithm',
    imageSrc: '/algorithm-wallpaper.jpg',
    imageAlt: 'Algorithm',
  },
  {
    id: 4,
    name: 'CS',
    href: 'cs',
    imageSrc: '/cs-wallpaper.jpg',
    imageAlt: 'CS',
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
        <div className="grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="bg-white group relative overflow-hidden rounded-md shadow-lg">
              <div className="aspect-h-1 aspect-w-1 h-70 group-hover:opacity-75">
                <img alt={product.imageAlt} src={product.imageSrc} />
              </div>
              <div className="my-3 flex justify-center align-middle text-xl font-bold tracking-tight text-gray-800 group-hover:opacity-75">
                {product.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

