import { PlaygroundNodeType } from '../constants/types';
import {
  Introduction,
  Example1,
  Example2,
  SubExample1, 
  SubExample2, 
  SubExample3 
} from '@/posts/playgorund';

export const playgroundNode = (
  component: React.FunctionComponent,
  slug: string,
  title: string,
  childrenSlug: string[]
): PlaygroundNodeType => ({ component, slug, title, childrenSlug });

export const playgroundNodes = {
  'introduction': playgroundNode(Introduction, 'introduction', 'Introduction', []),
  'ex1': playgroundNode(Example1, 'ex1', 'Example 1', ['sub-ex1', 'sub-ex2', 'sub-ex3']),
  'ex2': playgroundNode(Example2, 'ex2', 'Example 2', []),
  'sub-ex1': playgroundNode(SubExample1, 'sub-ex1', 'Sub Example 1', []),
  'sub-ex2': playgroundNode(SubExample2, 'sub-ex2', 'Sub Example 2', []),
  'sub-ex3': playgroundNode(SubExample3, 'sub-ex3', 'Sub Example 3', [])
};

export function generatePlaygroundParams(rootNodes: PlaygroundNodeType[]) {
  const result: { slugs: string[] }[] = [];

  function traverse(node: PlaygroundNodeType, path: string[]) {
    const currentPath = [...path, node.slug];
    result.push({ slugs: currentPath });
    node.childrenSlug.forEach((childSlug) => (
      traverse(playgroundNodes[childSlug], currentPath)
    ))
  }
  
  rootNodes.forEach((rootNode) => traverse(rootNode, []));
  
  return result;
}
