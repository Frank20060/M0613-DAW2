"use client";

import { useState, useEffect } from "react";

const NOTICIAS_BASE = 8; // Cantidad de noticias básicas

export default function FormAddNews() {
  const [noticiasNuevas, setNoticiasNuevas] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
    author: "",
    category: "",
    body: "",
  });
  const [mensaje, setMensaje] = useState("");

  // Cargar noticias del localStorage al montar
  useEffect(() => {
    const noticiasGuardadas = localStorage.getItem("noticias");
    if (noticiasGuardadas) {
      try {
        setNoticiasNuevas(JSON.parse(noticiasGuardadas));
      } catch (error) {
        console.error("Error cargando noticias:", error);
      }
    }

    /* ALTERNATIVA: Cargar noticias desde API en localhost:8000
    useEffect(() => {
      const cargarNoticiasDesdeAPI = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/noticias');
          if (response.ok) {
            const data = await response.json();
            setNoticiasNuevas(data);
          } else {
            console.error('Error en la respuesta de la API:', response.status);
          }
        } catch (error) {
          console.error('Error cargando noticias desde API:', error);
          // Fallback: usar localStorage si falla la API
          const noticiasGuardadas = localStorage.getItem("noticias");
          if (noticiasGuardadas) {
            try {
              setNoticiasNuevas(JSON.parse(noticiasGuardadas));
            } catch (err) {
              console.error("Error cargando noticias del localStorage:", err);
            }
          }
        }
      };
      cargarNoticiasDesdeAPI();
    }, []);
    */
  }, []);

  // Calcular total de noticias
  const totalNoticias = NOTICIAS_BASE + noticiasNuevas.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que no esté vacío
    if (
      !formData.title ||
      !formData.description ||
      !formData.author ||
      !formData.category
    ) {
      setMensaje("Por favor, completa todos los campos requeridos");
      return;
    }

    // Generar ID automático basado en el total de noticias
    const newId = String(totalNoticias + 1);

    const newNoticia = {
      ...formData,
      id: newId,
    };

    const noticiasActualizadas = [...noticiasNuevas, newNoticia];
    setNoticiasNuevas(noticiasActualizadas);
    localStorage.setItem("noticias", JSON.stringify(noticiasActualizadas));

    // Resetear formulario
    setFormData({
      id: "",
      title: "",
      description: "",
      image: "",
      date: new Date().toISOString().split("T")[0],
      author: "",
      category: "",
      body: "",
    });

    setMensaje(
      `✅ Noticia añadida exitosamente! Total de noticias: ${totalNoticias + 1}`,
    );
    setTimeout(() => setMensaje(""), 3000);

    /* ALTERNATIVA: Enviar noticia a API en localhost:8000 mediante POST
    const enviarNoticiaAAPI = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/noticias', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newNoticia),
        });

        if (response.ok) {
          const datosGuardados = await response.json();
          setNoticiasNuevas([...noticiasNuevas, datosGuardados]);
          
          // Resetear formulario
          setFormData({
            id: "",
            title: "",
            description: "",
            image: "",
            date: new Date().toISOString().split("T")[0],
            author: "",
            category: "",
            body: "",
          });

          setMensaje(
            `✅ Noticia añadida exitosamente! Total de noticias: ${totalNoticias + 1}`,
          );
          setTimeout(() => setMensaje(""), 3000);
        } else {
          setMensaje("❌ Error al guardar la noticia en la API");
          setTimeout(() => setMensaje(""), 3000);
        }
      } catch (error) {
        console.error('Error enviando noticia a la API:', error);
        setMensaje("❌ Error de conexión con la API");
        setTimeout(() => setMensaje(""), 3000);
      }
    };
    enviarNoticiaAAPI();
    */
  };

  const handleDelete = (id) => {
    const noticiasActualizadas = noticiasNuevas.filter(
      (noticia) => noticia.id !== id,
    );
    setNoticiasNuevas(noticiasActualizadas);
    localStorage.setItem("noticias", JSON.stringify(noticiasActualizadas));
    setMensaje("Noticia eliminada");
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Contador de Noticias */}
        <div className="mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-6 shadow-lg">
          <div className="text-center">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Total de Noticias
            </p>
            <p className="text-5xl font-bold text-white">
              {totalNoticias}
              <span className="text-3xl ml-2">🐔</span>
            </p>
          </div>
        </div>

        {/* Mensaje de estado */}
        {mensaje && (
          <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
            {mensaje}
          </div>
        )}

        {/* Formulario */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-yellow-800 mb-6">
            Añadir Nueva Noticia
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* ID */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ID (opcional)
                </label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="Se generará automáticamente"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Fecha */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Fecha
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            {/* Título */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Título *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Título de la noticia"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Descripción *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descripción breve de la noticia"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            {/* Cuerpo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contenido completo
              </label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="Contenido completo de la noticia"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Imagen */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                URL de la Imagen
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="/img/ejemplo.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Autor */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Autor *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Nombre del autor"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              {/* Categoría */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Categoría *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="Ciencia">Ciencia</option>
                  <option value="Curiosidades">Curiosidades</option>
                  <option value="Salud">Salud</option>
                  <option value="Economía">Economía</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Gastronomía">Gastronomía</option>
                </select>
              </div>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🐔 Publicar Noticia
            </button>
          </form>
        </div>

        {/* Lista de Noticias */}
        {noticiasNuevas.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-yellow-800 mb-6">
              📰 Noticias Nuevas ({noticiasNuevas.length})
            </h2>
            <div className="space-y-4">
              {noticiasNuevas.map((noticia) => (
                <div
                  key={noticia.id}
                  className="border-l-4 border-yellow-500 pl-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {noticia.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {noticia.author} • {noticia.category} • {noticia.date}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(noticia.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
