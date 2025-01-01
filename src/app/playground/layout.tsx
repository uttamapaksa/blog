import { menus } from "@/lib/constants/paths";
import MenuHeader from "@/components/menu/menu-header";
import MenuTitle from "@/components/menu/menu-title";
import PlaygroundNav from "@/components/playground/playground-nav";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const currMenu = menus.playground;

  return (
    <>
      <MenuHeader currMenu={currMenu} />
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <MenuTitle currMenu={currMenu} />
        <section className="flex mt-6 flex-wrap">
          <PlaygroundNav />
          {children}
        </section>
      </main>
    </>
  );
}
