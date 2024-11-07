import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { PostType } from '../constants/types';

const POSTS_PATH = 'src/app/posts'

export async function getPosts(menu: string): Promise<PostType[]> {
  const dirPath = path.join(process.cwd(), `${POSTS_PATH}/${menu}`);
  try {
    // const fileNames = fs.readdirSync(dirPath);
    const fileNames = await fs.promises.readdir(dirPath);
    const posts = await Promise.all(fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const filePath = path.join(dirPath, fileName);
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        return {
          id: data.id,
          // slug: fileName.replace(/\.mdx$/, ''),
          slug: fileName.slice(0, -4),
          title: data.title,
          datetime: data.datetime,
          category: data.category,
          thumbnail: data.thumbnail,
          content
        };
      })
    );
    
    return posts;
  } catch(error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export function getPostBySlug(menu: string, slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    content,
  };
}