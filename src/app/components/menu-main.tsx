export default function MenuMain({ menu }: { menu: string }) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-12">
      <header className="ps-2 pb-6 sm:pb-8 border-b border-gray-200">
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          {menu}
        </h2>
      </header>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>aaaa</div>
        <div>bbbb</div>
        <div>cccc</div>
      </div>
    </main>
  );
}
