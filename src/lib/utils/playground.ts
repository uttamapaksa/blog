import { PlaygroundNodeType } from '../constants/types';

export const playgroundNode = (
  self: React.FunctionComponent,
  slug: string,
  title: string,
  children: PlaygroundNodeType[]
): PlaygroundNodeType => ({ self, slug, title, children });

export function generatePlaygroundParams(data: PlaygroundNodeType[]) {
  const result: { slugs: string[] }[] = [];

  function traverse(node: PlaygroundNodeType, path: string[]) {
    const currentPath: string[] = [...path, node.slug];
    result.push({ slugs: currentPath });
    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => traverse(child, currentPath));
    }
  }
  data.forEach((rootNode) => traverse(rootNode, []));

  return result;
}

export function generatePlaygrounComponents(data: PlaygroundNodeType[]) {
  const result: Record<string, React.FunctionComponent> = {};

  function traverse(node: PlaygroundNodeType) {
    result[node.slug] = node.self;
    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => traverse(child));
    }
  }
  data.forEach((rootNode) => traverse(rootNode));

  return result;
}
