import fs from 'fs';
import path from 'path';
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from 'remark-gfm';
import type { PostType } from '../constants/types';

const POSTS_PATH = '/src/posts'

export async function getPosts(menu: string): Promise<PostType[]> {
  const dirPath = path.join(process.cwd(), `${POSTS_PATH}/${menu}`);
  try {
    // const fileNames = fs.readdirSync(dirPath);
    const fileNames = await fs.promises.readdir(dirPath);
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
    
    return posts;
  } catch(error) {
    console.error("Error getPosts:", error);
    return [];
  }
}

export async function getPostBySlug(menu: string, slug: string): Promise<PostType> {
  const dirPath = path.join(process.cwd(), `${POSTS_PATH}/${menu}`);
  try {
    const filePath = path.join(dirPath, `${slug}.mdx`);
    const file = await fs.promises.readFile(filePath, 'utf-8');
    const { content, frontmatter } = await compileMDX<PostType>({ 
      source: file, 
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
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

    return post
  } catch(error) {
    console.error("Error getPostBySlug:", error);
    return {
      id: 0,
      slug,
      title: '',
      datetime: '',
      category: { title: '', href: '' },
      thumbnail: '',
      summary: '',
      content: ''
    };
  }
}