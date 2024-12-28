import { menus } from "@/lib/constants/paths";
import { playgroundData, playgroundParams } from "@/lib/constants/params";
import MenuHeader from "@/components/menu/menu-header";
import MenuTitle from "@/components/menu/menu-title";
import PlaygroundNode from "@/components/playground-node";

export function generateStaticParams() {
  return playgroundParams;
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slugs?: string[] }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { slugs } = await params;
  const openSlugs = new Set(slugs)
  const currMenu = menus.playground

  return (
    <>
      <MenuHeader currMenu={currMenu} />
      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 sm:pt-12 sm:pb-24">
        <MenuTitle currMenu={currMenu} />
        <div className="mt-10">
          {playgroundData.map((node) => (
            <PlaygroundNode key={node.title} node={node} openSlugs={openSlugs} />
          ))}
          {children}
        </div>
      </main>
    </>
  );
}
