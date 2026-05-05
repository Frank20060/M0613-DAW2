"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminBlogListPage() {
  // Estat principal de pantalla: dades, loading i error
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    // Carrega llistat protegit des de la API d'admin
    setError("");
    const res = await fetch("/api/admin/posts", { credentials: "include" });
    if (!res.ok) {
      setError("No s’han pogut carregar els articles");
      setPosts([]);
      setLoading(false);
      return;
    }
    setPosts(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function remove(id) {
    // Confirmacio basica abans d'esborrar
    if (!confirm("Vols esborrar aquest article?")) return;
    const res = await fetch(`/api/admin/posts/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      alert("No s’ha pogut esborrar");
      return;
    }
    load();
  }

  if (loading) return <p className="text-gray-600">Carregant…</p>;

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-2xl font-bold">Articles del blog</h1>
        <Link
          href="/admin/blog/nou"
          className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          Nou article
        </Link>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {posts.length === 0 ? (
        <p className="text-gray-600">No hi ha articles. Crea’n un de nou.</p>
      ) : (
        <ul className="divide-y rounded-lg border bg-white">
          {posts.map((p) => (
            <li key={p.id} className="flex flex-wrap items-center gap-3 p-3">
              <div className="min-w-0 flex-1">
                <p className="font-medium">{p.title}</p>
                <p className="truncate text-sm text-gray-500">/{p.slug}</p>
              </div>
              <Link
                href={`/admin/blog/${p.id}/editar`}
                className="rounded border px-2 py-1 text-sm hover:bg-gray-50"
              >
                Editar
              </Link>
              <button
                type="button"
                onClick={() => remove(p.id)}
                className="rounded border border-red-200 px-2 py-1 text-sm text-red-700 hover:bg-red-50"
              >
                Esborrar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}