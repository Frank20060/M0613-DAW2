//Todo esto se hace en servidor (no usamos "use client" y por defecto son componentes de servidor)
//Esto nos facilita las cosas porque no necesitamos preocuparnos por el estado ni por los eventos

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 60 },
  });
  // next: { revalidate: 60 } = Durante 60s los datos de la API se guardan en caché
  if (!res.ok) throw new Error("Error carregant dades");
  return res.json();
}

export default async function ApiDemoPage() {
  const post = await getData();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Dades des de l'API (servidor)</h1>
      <p className="text-sm text-slate-500">
        Aquest contingut s'ha obtingut amb <code className="rounded bg-slate-200 px-1">fetch</code> en un Server Component.
      </p>
      <article className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="mt-2 text-slate-600">{post.body}</p>
      </article>
    </section>
  );
}