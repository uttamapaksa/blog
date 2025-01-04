import { PlaygroundNodeType } from './types';
import {
  Introduction,
  UIComponent,
  DisclosureNode,
} from '@/posts/playgorund';

function generatePlaygroundParams(rootNodes: PlaygroundNodeType[]) {
  const result: { slugs: string[] }[] = [];

  function traverse(node: PlaygroundNodeType, slugs: string[]) {
    const currentSlugs = [...slugs, node.slug];
    result.push({ slugs: currentSlugs });
    node.childrenSlug.forEach((childSlug) => traverse(playgroundNodes[childSlug], currentSlugs));
  }
  
  rootNodes.forEach((rootNode) => traverse(rootNode, []));
  return result;
}

function generateNode(
  component: React.FunctionComponent,
  slug: string,
  title: string,
  childrenSlug: string[]
): PlaygroundNodeType {
  return ({ component, slug, title, childrenSlug });
}

export const playgroundNodes = {
  'introduction': generateNode(Introduction, 'introduction', 'Introduction', []),
  'ui': generateNode(UIComponent, 'ui', 'UI Component', ['disclosureNode']),
  'disclosureNode': generateNode(DisclosureNode, 'disclosureNode', 'Disclosure', []),
};

export const rootNodes = [
  playgroundNodes.introduction,
  playgroundNodes.ui,
];

export const playgroundParams = generatePlaygroundParams(rootNodes);

export const playgroundPaths = Object.fromEntries(
  playgroundParams.map(({ slugs }) => ([slugs[slugs.length-1], slugs.join('/')]))
);