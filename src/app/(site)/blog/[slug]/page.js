import { notFound } from "next/navigation";
import { posts } from "../data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="space-y-4">
      <p className="text-sm uppercase tracking-wide text-blue-600">Blog</p>
      <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
      <p className="text-slate-600">{post.content}</p>
    </article>
  );
}

