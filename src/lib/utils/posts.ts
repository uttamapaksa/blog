import fs from 'fs';
import path from 'path';
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import type { PostType } from '../constants/types';

const POSTS_PATH = '/src/posts';

export async function getPosts(menu: string): Promise<PostType[] | null> {
  try {
    const dirPath = path.join(process.cwd(), `${POSTS_PATH}/${menu}`);
    // const fileNames = fs.readdirSync(dirPath, 'utf-8');
    const fileNames = await fs.promises.readdir(dirPath, 'utf-8');
    const posts = await Promise.all(fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const filePath = path.join(dirPath, fileName);
        const file = await fs.promises.readFile(filePath, 'utf-8');
        const { frontmatter } = await compileMDX<PostType>({ source: file, options: { parseFrontmatter: true }});

        return {
          id: frontmatter.id,
          // slug: fileName.replace(/\.mdx$/, ''),
          slug: fileName.slice(0, -4),
          title: frontmatter.title,
          datetime: frontmatter.datetime,
          category: frontmatter.category,
          thumbnail: frontmatter.thumbnail,
          summary: frontmatter.summary,
          content: ''
        };
      })
    );
  
    return posts.sort((a, b) => b.id - a.id);
  } catch(error) {
    console.error("Error getPosts:", error);
    return null;
  }
}

export async function getPostBySlug(menu: string, slug: string): Promise<PostType | null> {
  try {
    const dirPath = path.join(process.cwd(), `${POSTS_PATH}/${menu}`);
    const filePath = path.join(dirPath, `${slug}.mdx`);
    const file = await fs.promises.readFile(filePath, 'utf-8');
    const { content, frontmatter } = await compileMDX<PostType>({ 
      source: file, 
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypePrettyCode, { theme: 'everforest-dark' }]],
          format: 'mdx'
        }
      }
    });
    const post = {
      id: frontmatter.id,
      slug,
      title: frontmatter.title,
      datetime: frontmatter.datetime,
      category: frontmatter.category,
      thumbnail: frontmatter.thumbnail,
      summary: frontmatter.summary,
      content,
    };
    
    return post;
  } catch(error) {
    console.error("Error getPostBySlug:", error);
    return null;
  }
}
