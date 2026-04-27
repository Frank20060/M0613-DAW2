import Link from "next/link";
import news from "./../../public/noticias";

export default function Home() {
  const allNews = news;

  // Ordenar por fecha descendente y tomar las 3 más recientes
  const latestNews = allNews
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  /* ALTERNATIVA: Cargar noticias desde API en localhost:8000
  // Para usar esta alternativa, el componente debe ser "use client"
  // y usar useState y useEffect:
  
  'use client';
  import { useState, useEffect } from 'react';
  
  export default function Home() {
    const [allNews, setAllNews] = useState(news);
    
    useEffect(() => {
      const cargarNoticiasDesdeAPI = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/noticias');
          if (response.ok) {
            const noticiasDelAPI = await response.json();
            setAllNews([...news, ...noticiasDelAPI]);
          } else {
            console.error('Error en la respuesta de la API:', response.status);
          }
        } catch (error) {
          console.error('Error cargando noticias desde API:', error);
          // Usar las noticias por defecto si falla
          setAllNews(news);
        }
      };
      cargarNoticiasDesdeAPI();
    }, []);
    
    const latestNews = [...allNews]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
    
    // ... resto del JSX igual
  */

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="text-center">
        <h1 className="text-5xl font-bold text-yellow-800 mb-8">
          🐔 El corral
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Mantente al día con las últimas noticias del mundo avícola
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">
            Últimas Noticias
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((noticia, index) => (
              <Link
                key={index}
                href={`/notihuevo/${noticia.id}`}
                className="block"
              >
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
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
