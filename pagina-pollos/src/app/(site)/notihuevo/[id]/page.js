"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import news from "./../../../../../public/noticias";

export default function Home() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { id } = params;

    // Buscar en noticias base
    let encontrada = news.find((p) => p.id === id);

    // Si no está en base, buscar en localStorage
    if (!encontrada) {
      const noticiasGuardadas = localStorage.getItem("noticias");
      if (noticiasGuardadas) {
        try {
          const noticiasNuevas = JSON.parse(noticiasGuardadas);
          encontrada = noticiasNuevas.find((p) => p.id === id);
        } catch (error) {
          console.error("Error cargando noticias:", error);
        }
      }
    }

    setPost(encontrada || null);
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Cargando noticia...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            Noticia no encontrada 🐔
          </p>
          <a
            href="/notihuevo"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
          >
            ← Volver a noticias
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.description}
            </p>

            {post.body && (
              <div className="border-t border-gray-200 pt-8">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {post.body.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-gray-200 mt-8 pt-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-lg">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {post.author}
                  </p>
                  <p className="text-sm text-gray-500">Autor</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <a
            href="/notihuevo"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
          >
            ← Volver a noticias
          </a>
        </div>
      </div>
    </div>
  );
}
