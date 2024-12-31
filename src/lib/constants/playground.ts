import { PlaygroundNodeType } from './types';
import {
  Introduction,
  Example1,
  Example2,
  SubExample1, 
  SubExample2, 
  SubExample3 
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
  'ex1': generateNode(Example1, 'ex1', 'Example 1', ['sub-ex1', 'sub-ex2', 'sub-ex3']),
  'ex2': generateNode(Example2, 'ex2', 'Example 2', []),
  'sub-ex1': generateNode(SubExample1, 'sub-ex1', 'Sub Example 1', []),
  'sub-ex2': generateNode(SubExample2, 'sub-ex2', 'Sub Example 2', []),
  'sub-ex3': generateNode(SubExample3, 'sub-ex3', 'Sub Example 3', [])
};

export const rootNodes = [
  playgroundNodes.introduction,
  playgroundNodes.ex1,
  playgroundNodes.ex2
];

export const playgroundParams = generatePlaygroundParams(rootNodes);

export const playgroundPaths = Object.fromEntries(
  playgroundParams.map(({ slugs }) => ([slugs[slugs.length-1], slugs.join('/')]))
);