import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type Post = {
  slug: string;
  title: string;
  content: string;
  category: string;
  subcategory: string;
  hrefBack: string;
  hrefNext: string;
  sideComponent: React.ReactNode;
};

const workPostsDirectory = join(process.cwd(), "app/_posts/work");

export function getWorkPostSlugs() {
  return fs
    .readdirSync(workPostsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
}

export async function getWorkPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(workPostsDirectory, `${realSlug}.mdx`);
  const post = await import(`@/app/_posts/work/${realSlug}.mdx`);

  const formattedPost = {
    ...post.metadata,
    content: post.default(),
    slug: realSlug,
  } as unknown as Post;

  return formattedPost;
}

export async function getAllWorkPosts(): Promise<Post[]> {
  const slugs = getWorkPostSlugs();
  const postPromises = slugs.map((slug) => getWorkPostBySlug(slug));
  const posts = await Promise.all(postPromises);
  return Promise.resolve(posts);
}
