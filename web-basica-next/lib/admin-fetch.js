export async function uploadBlogImage(file) {
  // Preparem multipart/form-data per enviar el fitxer al backend
  const fd = new FormData();
  fd.append("file", file);
  // credentials: "include" envia la cookie de sessio httpOnly
  const res = await fetch("/api/admin/upload", {
    method: "POST",
    body: fd,
    credentials: "include",
  });
  const data = await res.json().catch(() => ({}));
  // Si backend retorna error, el propaguem per mostrar-lo al formulari
  if (!res.ok) throw new Error(data.error || "Error en pujar la imatge");
  // Retornem URL publica per guardar-la al post
  return data.url;
}