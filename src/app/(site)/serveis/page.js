export default function ServeisPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Serveis</h1>
      <ul className="grid gap-3 sm:grid-cols-2">
        <li className="rounded-lg border bg-white p-4 shadow-sm">Desenvolupament frontend</li>
        <li className="rounded-lg border bg-white p-4 shadow-sm">Desenvolupament backend</li>
        <li className="rounded-lg border bg-white p-4 shadow-sm">Integració d'APIs</li>
        <li className="rounded-lg border bg-white p-4 shadow-sm">Desplegament al núvol</li>
      </ul>
    </section>
  );
}