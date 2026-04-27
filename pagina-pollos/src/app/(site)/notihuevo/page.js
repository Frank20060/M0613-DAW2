"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import news from "./../../../../public/noticias";

export default function Home() {
  const [allNews, setAllNews] = useState(news);

  // Cargar noticias nuevas del localStorage
  useEffect(() => {
    const noticiasGuardadas = localStorage.getItem("noticias");
    if (noticiasGuardadas) {
      try {
        const noticiasNuevas = JSON.parse(noticiasGuardadas);
        setAllNews([...news, ...noticiasNuevas]);
      } catch (error) {
        console.error("Error cargando noticias:", error);
      }
    }

    /* ALTERNATIVA: Cargar noticias desde API en localhost:8000
    const cargarNoticiasDesdeAPI = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/noticias');
        if (response.ok) {
          const noticiasDelAPI = await response.json();
          setAllNews([...news, ...noticiasDelAPI]);
        } else {
          console.error('Error en la respuesta de la API:', response.status);
          // Fallback: usar solo las noticias por defecto
          setAllNews(news);
        }
      } catch (error) {
        console.error('Error cargando noticias desde API:', error);
        // Fallback: intentar cargar del localStorage
        const noticiasGuardadas = localStorage.getItem("noticias");
        if (noticiasGuardadas) {
          try {
            const noticiasNuevas = JSON.parse(noticiasGuardadas);
            setAllNews([...news, ...noticiasNuevas]);
          } catch (err) {
            console.error("Error cargando del localStorage:", err);
            setAllNews(news);
          }
        }
      }
    };
    cargarNoticiasDesdeAPI();
    */
  }, []);

  // Ordenar por fecha descendente
  const latestNews = [...allNews].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="text-center">
        <h1 className="text-5xl font-bold text-yellow-800 mb-8">
          🐔 El notiHuevo
        </h1>
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((noticia, index) => (
              <Link
                key={index}
                href={`/notihuevo/${noticia.id}`}
                className="block"
              >
                <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-full cursor-pointer">
                  <img
                    src={noticia.image}
                    alt={noticia.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-yellow-700 mb-3">
                    {noticia.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{noticia.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{noticia.author}</span>
                    <span>{noticia.date}</span>
                  </div>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-2">
                    {noticia.category}
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
