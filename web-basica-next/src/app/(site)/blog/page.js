import Link from "next/link";
import { posts } from "./data";

export default function BlogIndexPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Blog</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-lg border bg-white p-4 shadow-sm hover:border-blue-300"
            >
              <h2 className="font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}