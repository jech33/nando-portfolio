import { notFound } from "next/navigation";
import { getAllWorkPosts, getWorkPostBySlug } from "@/lib/api";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoArticle from "@/app/_ui/layout/NandoArticle";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = await getWorkPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <NandoLayout>
      <NandoLayoutArticle>
        <NandoArticle>{post.content}</NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
}

export async function generateStaticParams() {
  const posts = await getAllWorkPosts();

  return posts.map((post) => ({
    slug: `${post.category}${post.subcategory}`,
  }));
}
