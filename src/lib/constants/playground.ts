import { PlaygroundNodeType } from './types';
import Introduction from '@/components/playground/introduction';
import UIComponent from '@/components/playground/ui-component';
import DisclosureNode from '@/components/playground/disclosure-node';
import CodeBlockNode from '@/components/playground/codeblock-node';
import StackedBarNode from '@/components/playground/stackedbar-node';

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
  'ui': generateNode(UIComponent, 'ui', 'UI Component', [
    'disclosure', 'codeblock', 'stackedbar'
  ]),
  'disclosure': generateNode(DisclosureNode, 'disclosure', 'Disclosure', []),
  'codeblock': generateNode(CodeBlockNode, 'codeblock', 'Code Block', []),
  'stackedbar': generateNode(StackedBarNode, 'stackedbar', 'Stacked Bar', []),
};

export const rootNodes = [
  playgroundNodes.introduction,
  playgroundNodes.ui,
];

export const playgroundParams = generatePlaygroundParams(rootNodes);

export const playgroundPaths = Object.fromEntries(
  playgroundParams.map(({ slugs }) => ([slugs[slugs.length-1], slugs.join('/')]))
);